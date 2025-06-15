import { useState, type JSX } from 'react'
import { useRef } from 'react'
import React, { createContext, useContext } from 'react';
import worldIcon from './assets/world.svg'
import ChinaMap from './assets/china.png'
import KoreaMap from './assets/korea.png'
import JapanMap from './assets/japan.png'
import VietnamMap from './assets/vietnam.webp'
import CambodiaMap from './assets/cambodia.png'
import IndonesiaMap from './assets/indonesia.png'
import IndiaMap from './assets/india.png'
import SriLankaMap from './assets/sri-lanka.png'
import EastAsia from './assets/east-asia.png'
import SoutheastAsia from './assets/southeast-asia.webp'
import SouthAsia from './assets/south-asia.png'
import MiddleEast from './assets/middle-east.webp'
import './App.css'

// State machine for keeping track of the current page
const enum Page {
  START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION
}

const enum SelectionStep {
  REGION, COUNTRY, TIME
}

type GeographicButton = Readonly<{
  name: string,
  image: string
}>;

const regionButtons: GeographicButton[] = [
  { name: "East Asia", image: EastAsia },
  { name: "Southeast Asia", image: SoutheastAsia },
  { name: "South Asia", image: SouthAsia },
  { name: "Middle East", image: MiddleEast }
]
const countryButtons: Record<string, GeographicButton[]> = {
  "East Asia": [
    { name: "China", image: ChinaMap },
    { name: "Korea", image: KoreaMap },
    { name: "Japan", image: JapanMap }
  ],
  "Southeast Asia": [
    { name: "Vietnam", image: VietnamMap },
    { name: "Cambodia", image: CambodiaMap },
    { name: "Indonesia", image: IndonesiaMap }
  ],
  "South Asia": [
    { name: "India", image: IndiaMap },
    { name: "Sri Lanka", image: SriLankaMap },
  ]
}

const PageTransition = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.START_SCREEN)
  const [nextPage, setNextPage] = useState<Page>(Page.EXPLANATION)
  const [transitioning, setTransitioning] = useState<boolean>(false)
  const timeoutRef = useRef<number | null>(null)

  // Begin animation with setTransitioning, officially switch to the next page after delay
  const handlePageChange = (nextPage : Page) => {
    if (transitioning) return; // Prevent overlapping transitions

    setTransitioning(true)
    setNextPage(nextPage)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current) // Clear any existing timeout
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentPage(nextPage)
      setTransitioning(false)
      timeoutRef.current = null // Reset the timeout reference
    }, 2000)
  }

  const renderPage = (page: Page) => {
    switch (page) {
      case Page.START_SCREEN:
        return (
          <StartScreen
            goToPage={handlePageChange}
          />
        )
      case Page.EXPLANATION:
        return <ExplanationPage />
      case Page.GEOGRAPHIC_SELECTION:
        return (
          <GeographicSelectionPage />
        )
      default:
        console.log("Invalid page location");
        return <div>Error: Invalid page location</div>
    }
  }

  return (
    <div className='slide-container'>
      <div className={transitioning ? 'slide-out' : ''}>
        {renderPage(currentPage)}
      </div>
      {transitioning && (
        <div className='slide-in'>
          {renderPage(nextPage)}
        </div>
      )}
    </div>
  )
}

interface StartScreenProps {
  goToPage: (page: Page) => void
}

const StartScreen = ({goToPage}: StartScreenProps) => {
  return (
    <div> 
        <h1>AP World Study Website</h1>
        <p>Click to Begin</p>
        <button className='image-button' onClick={() => goToPage(Page.GEOGRAPHIC_SELECTION)}>
          <img src={worldIcon} className="logo"/>
        </button>
        <button onClick={() => goToPage(Page.EXPLANATION)}>Explanation</button>
    </div>
  )
}

const ExplanationPage = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <p>Explanation TODO</p>
    </div>
  )
}

interface GeographicSelectionContextProps {
  selectionStep: SelectionStep;
  setSelectionStep: React.Dispatch<React.SetStateAction<SelectionStep>>;
  selectedRegion: string | null;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string | null>>;
}

const GeographicSelectionContext = createContext<GeographicSelectionContextProps | undefined>(undefined);

export const useGeographicSelection = () => {
  const context: GeographicSelectionContextProps | undefined = useContext(GeographicSelectionContext);
  if (!context) {
    throw new Error('useGeographicSelection must be used within a GeographicSelectionProvider');
  }
  return context;
};

interface GeographicSelectionProviderProps {
  children: React.ReactNode;
}

export const GeographicSelectionProvider: React.FC<GeographicSelectionProviderProps> = ({ children }) => {
  const [selectionStep, setSelectionStep] = useState<SelectionStep>(SelectionStep.REGION);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <GeographicSelectionContext.Provider value={{ selectionStep, setSelectionStep, selectedRegion, setSelectedRegion }}>
      {children}
    </GeographicSelectionContext.Provider>
  );
};

const GeographicSelectionPage = () => {
  const { selectionStep, setSelectionStep, selectedRegion, setSelectedRegion } = useGeographicSelection();

  return (<div className='geographic-button-grid'>
        {selectionStep === SelectionStep.REGION && regionButtons.map((region, index) => (
          <button
            key={index}
            className="image-button"
            onClick={() => {
                setSelectedRegion(region.name);
                setSelectionStep(SelectionStep.COUNTRY);
              }
            }
          >
            <img src={region.image} alt={`${region.name} map`} />
            <span>{region.name}</span>
          </button>
        ))}
        {selectionStep === SelectionStep.COUNTRY && selectedRegion && countryButtons[selectedRegion] ? (
          countryButtons[selectedRegion].map((country, index) => (
            <button
              key={index}
              className="image-button"
            /*TODO add onClick functionality*/
            >
              <img src={country.image} alt={`${country.name} map`} />
              <span>{country.name}</span>
            </button>
          ))
        ) : (
          <></> // Render an empty fragment or fallback UI
        )}
      </div>)
}

function App() {
  return (
    <GeographicSelectionProvider>
      <PageTransition/>
    </GeographicSelectionProvider>
  )
}

export default App

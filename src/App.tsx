import { useState, type JSX } from 'react'
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

function App() {
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

  const [currentPage, setCurrentPage] = useState<Page>(Page.START_SCREEN)
  const [nextPage, setNextPage] = useState<Page>(Page.EXPLANATION)
  const [transitioning, setTransitioning] = useState<boolean>(false)
  const [selectionStep, setSelectionStep] = useState<SelectionStep>(SelectionStep.REGION)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
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


  // Begin animation with setTransitioning, officially switch to the next page after delay
  const handlePageChange = (nextPage: Page) => {
    setTransitioning(true)
    setNextPage(nextPage);

    setTimeout(() => {
      setCurrentPage(nextPage)
      setTransitioning(false)
    }, 2000)
  }

  // List of page layouts linked to enum values for better readability
  const pages: Record<Page, JSX.Element> = {
    [Page.START_SCREEN]: (
      <div>
        <h1>AP World Study Website</h1>
        <p>Click to Begin</p>
        <div>
          <button className='image-button' onClick={() => handlePageChange(Page.GEOGRAPHIC_SELECTION)}>
            <img src={worldIcon} className="logo" />
          </button>
        </div>
        <button onClick={() => handlePageChange(Page.EXPLANATION)}>Explanation</button>
      </div>
    ),
    [Page.EXPLANATION]: (
      <div>
        <h1>Second Page</h1>
        <p>Explanation TODO</p>
      </div>
    ),
    [Page.GEOGRAPHIC_SELECTION]: (
      <div className='geographic-button-grid'>
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
        {selectionStep === SelectionStep.COUNTRY && countryButtons[selectedRegion!].map((country, index) => (
          <button
            key={index}
            className="image-button"
          /*TODO add onClick functionality*/
          >
            <img src={country.image} alt={`${country.name} map`} />
            <span>{country.name}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className='slide-container'>
      {/* Display the current page, add slide-out animation if transitioning */}
      <div className={transitioning ? 'slide-out' : ''}>
        {pages[currentPage]}
      </div>
      {/* If transitioning, display the next page sliding in */}
      {transitioning && (<div className={transitioning ? 'slide-in' : ''}>
        {transitioning && pages[nextPage]}
      </div>)}
    </div>
  )
}

export default App

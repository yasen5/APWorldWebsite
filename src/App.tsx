import { useState, useRef, createContext, useContext, useMemo } from 'react';
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
import Navbar from './Navbar.tsx';
export enum AppPage {
  START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION
}

export const AppPageLabels: Record<AppPage, string> = {
  [AppPage.START_SCREEN]: "Home",
  [AppPage.EXPLANATION]: "Explanation",
  [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection"
};

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
];
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
};

const timePeriods: number[] = [
  1200, 1450, 1750, 1900, 2025
];

const sliderPercentage = (timePeriod: number) => {
  return (timePeriod - timePeriods[0]) / (timePeriods[timePeriods.length - 1] - timePeriods[0]) * 100;
}

interface TimeSliderProps {
  selectedRange: [number, number];
  setSelectedRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const TimeSliderContext = createContext<TimeSliderProps | undefined>(undefined);

export const useTimeSliderContext = () => {
  const context: TimeSliderProps | undefined = useContext(TimeSliderContext);
  if (!context) {
    throw new Error('useTimeSliderContext must be used within a TimeSliderProvider');
  }
  return context;
};

interface TimeSliderProviderProps {
  children: React.ReactNode;
}

export const TimeSliderProvider: React.FC<TimeSliderProviderProps> = ({ children }) => {
  const [selectedRange, setSelectedRange] = useState<[number, number]>([1200, 1450]);

  return (
    <TimeSliderContext.Provider value={{ selectedRange, setSelectedRange }}>
      {children}
    </TimeSliderContext.Provider>
  );
};

const TimeSlider = () => {
  const { selectedRange, setSelectedRange } = useTimeSliderContext();
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderPercentages = useMemo(() => {
    return timePeriods.map((timePeriod) => ({
      timePeriod,
      percentage: sliderPercentage(timePeriod),
    }));
  }, [timePeriods]);  

  const handleClick = (click: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const boundingBox: DOMRect = sliderRef.current.getBoundingClientRect();
    const clickPercentage: number = (click.clientX - boundingBox.left) / boundingBox.width * 100;

    for (let i = timePeriods.length - 2; i >= 0; i--) {
      if (clickPercentage >= sliderPercentages[i].percentage) {
        setSelectedRange([timePeriods[i], timePeriods[i + 1]]);
        break;
      }
    }
  };

  return (
    <div className='slider-container'>
      <h1>Select a time period</h1>
      <div className='slider-wrapper'>
        <div 
          ref={sliderRef} 
          className={'slider-track'}
          onClick={handleClick}
        >
          <div 
            className='active-range'
            style={{ 
              left: `${sliderPercentage(selectedRange[0])}%`, 
              width: `${ ((sliderPercentage(selectedRange[1]) - sliderPercentage(selectedRange[0])))}%` 
            }} 
          />
          <div>
            {sliderPercentages.map((percentage) => (
              <p key={percentage.timePeriod} className='slider-label' style={{ left: `${percentage.percentage}%` }}>
                {percentage.timePeriod}
              </p>))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PageTransitionProps {
  currentPage: AppPage;
  setCurrentPage: React.Dispatch<React.SetStateAction<AppPage>>;
  nextPage: AppPage;
  setNextPage: React.Dispatch<React.SetStateAction<AppPage>>;
  transitioning: boolean;
  setTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
  goToPage: (page: AppPage) => void;
}

const PageTransitionContext = createContext<PageTransitionProps | undefined>(undefined);

export const usePageTransitionContext = () => {
  const context: PageTransitionProps | undefined = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransitionContext must be used within a PageTransitionProvider');
  }
  return context;
};

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<AppPage>(AppPage.START_SCREEN);
  const [nextPage, setNextPage] = useState<AppPage>(AppPage.EXPLANATION);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const goToPage = (page: AppPage) => {
    if (transitioning) return;
    setTransitioning(true);
    setNextPage(page);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentPage(page);
      setTransitioning(false);
    }, 1000);
  };
  

  return (
    <PageTransitionContext.Provider value={{ currentPage, setCurrentPage, nextPage, setNextPage, transitioning, setTransitioning, goToPage}}>
      {children}
    </PageTransitionContext.Provider>
  );
};

const PageTransition = () => {
  const {transitioning, currentPage, nextPage, goToPage } = usePageTransitionContext();

  const renderPage = (page: AppPage) => {
    switch (page) {
      case AppPage.START_SCREEN:
        return <StartScreen goToPage={goToPage} />;
      case AppPage.EXPLANATION:
        return <ExplanationPage />;
      case AppPage.GEOGRAPHIC_SELECTION:
        return <GeographicSelectionPage />;
      default:
        return <div>Error: Invalid page</div>;
    }
  };

  return (
    <div className="slide-container">
      <div className={transitioning ? 'slide-out' : ''}>
        {renderPage(currentPage)}
      </div>
      {transitioning && (
        <div className="slide-in">
          {renderPage(nextPage)}
        </div>
      )}
    </div>
  );
};

interface StartScreenProps {
  goToPage: (page: AppPage) => void
}

const StartScreen = ({goToPage}: StartScreenProps) => {
  return (
    <div> 
        <h1>AP World Study Website</h1>
        <p>Click to Begin</p>
        <button className='image-button' onClick={() => goToPage(AppPage.GEOGRAPHIC_SELECTION)}>
          <img src={worldIcon} className="logo"/>
        </button>
        <button onClick={() => goToPage(AppPage.EXPLANATION)}>Explanation</button>
    </div>
  );
};

const ExplanationPage = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <p>Explanation TODO</p>
    </div>
  );
};

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
        {selectionStep === SelectionStep.REGION && regionButtons.map((region) => (
          <button
            key={region.name}
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
          <div className="fallback-message">Please select a region to view countries.</div>
        )}
      </div>);
};

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(AppPage.START_SCREEN);
  const [nextPage, setNextPage] = useState<AppPage>(AppPage.EXPLANATION);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  return (
    <TimeSliderProvider>
      <GeographicSelectionProvider>
        <PageTransitionProvider>
          <div>
            <Navbar/>
            <TimeSlider />
            <PageTransition />
          </div>
        </PageTransitionProvider>
      </GeographicSelectionProvider>
    </TimeSliderProvider>
  );
}

export default App

import { useState, useRef, createContext, useContext, useMemo } from 'react';
import worldIcon from './assets/world.svg'
import JapanMap from './assets/japan.png'
import GoryeoDynasty from './assets/goryeo-dynasty.svg'
import AbbasidCaliphate from './assets/abbasid-caliphate.svg?react';
import MajapahitEmpire from './assets/majapahit-empire.png'
import OttomanEmpire from './assets/ottoman-empire.webp'
import TranDynasty from './assets/tran-dynasty.png'
import IndiaMap from './assets/india.png'
import SriLankaMap from './assets/sri-lanka.png'
import EastAsia from './assets/east-asia.png'
import SoutheastAsia from './assets/southeast-asia.webp'
import SouthAsia from './assets/south-asia.png'
import MiddleEast from './assets/middle-east.webp'
import SongDynasty from './assets/song-dynasty.svg'
import YuanDynasty from './assets/yuan-dynasty.jpg'
import MingDynasty from './assets/ming-dynasty.png'
import './App.css'
import Navbar from './Navbar.tsx';
import { countryNotes} from './notes'
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

interface Nation {
  region: "East Asia" | "Southeast Asia" | "South Asia" | "Middle East";
  name: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  start: number;
  end: number;
}

const regionButtons: GeographicButton[] = [
  { name: "East Asia", image: EastAsia },
  { name: "Southeast Asia", image: SoutheastAsia },
  { name: "South Asia", image: SouthAsia },
  { name: "Middle East", image: MiddleEast }
];

const nations: Nation[] = [
  // { region: "East Asia", name: "Song Dynasty", image: SongDynasty, start: 960, end: 1279 },
  // { region: "East Asia", name: "Yuan Dynasty", image: YuanDynasty, start: 1271, end: 1368 },
  // { region: "East Asia", name: "Ming Dynasty", image: MingDynasty, start: 1368, end: 1644 },
  // { region: "East Asia", name: "Goryeo Dynasty (Korea, 918-1392)", image: GoryeoDynasty, start: 918, end: 1392 },
  // { region: "Southeast Asia", name: "Trần Dynasty (Vietnam, 1225-1400)", image: TranDynasty, start: 1225, end: 1400 },
  // { region: "Southeast Asia", name: "Majapahit Empire (Indonesia, 1293-1527)", image: MajapahitEmpire, start: 1293, end: 1527 },
  // { region: "South Asia", name: "Delhi Sultanate (India, 1206-1526)", image: IndiaMap, start: 1206, end: 1526 },
  // { region: "South Asia", name: "Sri Lanka (Sri Lanka, 543BC-1815CE)", image: SriLankaMap, start: -543, end: 1815 },
  { region: "Middle East", name: "Abbasid Caliphate (750-1258)", image: AbbasidCaliphate, start: 750, end: 1258 },
  // { region: "Middle East", name: "Ottoman Empire (Discount Caliphate)", image: OttomanEmpire, start: 1299, end: 1922 },
  // { region: "East Asia", name: "Kamakura & Muromachi Shogunates (Japan)", image: JapanMap, start:1192, end: 1573 }
];

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
    <div className='p-12'>
      <h1>Select a time period</h1>
        <div
          ref={sliderRef}
          className={'relative h-2 bg-gray-300 rounded-lg cursor-pointer'}
          onClick={handleClick}
        >
          <div
            className='absolute h-2 bg-blue-500 rounded-lg'
            style={{
              left: `${sliderPercentage(selectedRange[0])}%`,
              width: `${((sliderPercentage(selectedRange[1]) - sliderPercentage(selectedRange[0])))}%`
            }}
          />
          <div>
            {sliderPercentages.map((percentage) => (
              <p key={percentage.timePeriod} className='absolute -translate-x-1/2 pt-2' style={{ left: `${percentage.percentage}%` }}>
                {percentage.timePeriod}
              </p>))}
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
    <PageTransitionContext.Provider value={{ currentPage, setCurrentPage, nextPage, setNextPage, transitioning, setTransitioning, goToPage }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

const PageTransition = () => {
  const { transitioning, currentPage, nextPage, goToPage } = usePageTransitionContext();

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
    <div className="slide-container relative w-full h-full">
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

const StartScreen = ({ goToPage }: StartScreenProps) => {
  return (
    <div className='flex flex-col items-center'>
      <h1>AP World Study Website</h1>
      <p>Click to Begin</p>
      <button className='image-button' onClick={() => goToPage(AppPage.GEOGRAPHIC_SELECTION)}>
        <img src={worldIcon} className="p-1.5 h-24 w-24 drop-shadow-sm animate-pulse" />
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
  const { selectedRange } = useTimeSliderContext();
  const [selectedCountry, setSelectedCountry] = useState<Nation | null>(null);

  const nationsByTime: Record<number, Record<string, Nation[]>> = useMemo(
    () => {
      const nationsByTimeRecord: Record<number, Record<string, Nation[]>> = {};
      timePeriods.forEach((timePeriod, timeIndex) => {
        const nationsInPeriod: Record<string, Nation[]> = {};
        if (timeIndex === timePeriods.length - 1) return nationsInPeriod; // Skip the last time period as it has no end
        nations.forEach((nation) => {
          if (
            (nation.start <= timePeriod && nation.end >= timePeriod) ||
            (nation.start >= timePeriod && nation.start <= timePeriods[timeIndex + 1])
          ) {
            if (!nationsInPeriod[nation.region]) {
              nationsInPeriod[nation.region] = [];
            }
            nationsInPeriod[nation.region].push(nation);
          }
        });
        nationsByTimeRecord[timePeriod] = nationsInPeriod;
      });
      return nationsByTimeRecord;
    },
    [nations, timePeriods]
  );

  const Dropdown: React.FC<{ title: string; children: React.ReactNode }> = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border border-gray-300 rounded mb-2">
        <button className="w-full flex justify-between items-center p-2 bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}>
            <span className="font-medium">{title}</span>
            <span>{isOpen? "▲" : "▼"} </span>
          </button>
          {isOpen && (
            <div className="p-2 bg-white text-sm">
              {children}
            </div>
          )}
      </div>
    );
  };

  const CountryPopup: React.FC<{ country : Nation, onClose: () => void }> = ({ country, onClose}) => {
    return (
      <div className="fixed inset-0 flex items-center flex-center justify-center z-50">
        <div className="relative max-w-lg w-full max-h-[60vh] overflow-y-auto bg-[#f0f0f0] border-2 border-[#999] rounded-md shadow-lg p-6 text-left">
          <button className="[all:unset] cursor-pointer absolute top-2 right-2" onClick={onClose}>x</button>
          <h2>{country.name}</h2>
          <p>Hexagon goes here</p>
          {countryNotes[country.name] &&
            Object.entries(countryNotes[country.name]).map(([sectionTitle, content]) => (
              <Dropdown key={sectionTitle} title={sectionTitle}>
                <p>{content}</p>
              </Dropdown>
            ))
          }
        </div>
      </div>
    );
  };

  return (
    <>
    <div className='geographic-button-grid'>
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
      {selectionStep === SelectionStep.COUNTRY && selectedRegion && (
        (nationsByTime[selectedRange[0]]?.[selectedRegion] || []).map((country) => (
          <div key={country.name}>
            <country.image
              className='country-svg'
              onClick={() => { setSelectedCountry(country); }}
              style={{ cursor: 'pointer' }}
            />
            <span>{country.name}</span>
          </div>
        ))
      )}
    </div>
    
    {selectedCountry && (
      <CountryPopup
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    )}
  </>
    );
};

function App() {
  return (
    <TimeSliderProvider>
      <GeographicSelectionProvider>
        <PageTransitionProvider>
          <Navbar />
          <TimeSlider />
          <PageTransition />
        </PageTransitionProvider>
      </GeographicSelectionProvider>
    </TimeSliderProvider>
  );
}

export default App

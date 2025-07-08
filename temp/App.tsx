import { useState, useRef, useEffect, createContext, useContext, useMemo } from 'react';
import worldIcon from './assets/world.svg'
import './App.css'
import Navbar from './Navbar.tsx';
import { countryNotes} from './notes'
import World1200 from './assets/World-1200.svg?react';

export enum AppPage {
  START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION
}

export const AppPageLabels: Record<AppPage, string> = {
  [AppPage.START_SCREEN]: "Home",
  [AppPage.EXPLANATION]: "Explanation",
  [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection"
};

const nations = [
  //must be exactly the data-country of the path
  //also idk if there's a better way to do this and also a bunch of these aren't super important
  "Rajput Kingdoms",
  "Delhi Sultanate",
  "Chola Dynasty",
  "Khmer Empire",
  "Srivijaya Empire",
  "Song Dynasty",
  "Great Zimbabwe",
  "Swahili Coast",
  "Fatimid Caliphate",
  "Ghana Empire",
  "Mali Empire",
  "Venice",
  "Byzantine Empire",
  "Sweden",
  "Denmark",
  "Holy Roman Empire",
  "Castilla",
  "Navarre",
  "Portugal",
  "France",
  "Aragon",
  "Mayan city states"
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

const Dropdown: React.FC<{ title: string; children: React.ReactNode }> = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="transition-[fill] duration-200 ease-in-out border border-gray-300 rounded mb-2">
        <button className="hover:fill-[#c4c4c4] w-full flex justify-between items-center p-2 bg-gray-100"
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

  const CountryPopup: React.FC<{ country : string, onClose: () => void }> = ({ country, onClose}) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="relative max-w-lg w-full max-h-[60vh] overflow-y-auto bg-[#f8f8f8] border-2 border-[#999] rounded-md shadow-lg p-6 text-left">
          <button className="[all:unset] cursor-pointer absolute top-2 right-2" onClick={onClose} aria-label="Close">x</button>
          <h2 className="font-bold" id="modal-title">{country}</h2>
          <p>Hexagon goes here</p>
          {countryNotes[country] &&
            Object.entries(countryNotes[country]).map(([sectionTitle, content]) => (
              <Dropdown key={sectionTitle} title={sectionTitle}>
                <p>{content}</p>
              </Dropdown>
            ))
          }
        </div>
      </div>
    );
  };

const GeographicSelectionPage = () => {
  const { selectedRange } = useTimeSliderContext();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const mapByTime: Record<number, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    1200: World1200
  };

  const handleCountryClick = (event: React.MouseEvent<SVGSVGElement>) => {
    console.log("Country clicked:", event.currentTarget.getAttribute('data-country'));
    const countryName = event.currentTarget.getAttribute('data-country');
    if (!countryName) return;

    if (nations.includes(countryName)) {
      setSelectedCountry(countryName);
    } else {
      alert(`No notes available for: ${countryName}`);
    }
  };

  const currentTimePeriod = selectedRange[0];
  const MapComponent = mapByTime[currentTimePeriod];

  if (!MapComponent) {
    return <div>Map not available for this time period</div>;
  }

  return (
    <>
    <div className="svg-container w-full flex justify-center max-w-[800px]">
      <MapComponent
        className="country-svg"
        onClick={handleCountryClick}
        style={{ cursor: 'pointer' }}
      />
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
      <PageTransitionProvider>
        <Navbar />
        <TimeSlider />
        <PageTransition />
      </PageTransitionProvider>
    </TimeSliderProvider>
  );
}

export default App

import { useState, useRef, createContext, useContext, useMemo } from 'react';
import worldIcon from './assets/world.svg'
import './App.css'
import Navbar from './Navbar.tsx';
import { GeographicSelectionPage } from './geographic-selection.tsx';

export enum AppPage {
  START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION
}

export const AppPageLabels: Record<AppPage, string> = {
  [AppPage.START_SCREEN]: "Home",
  [AppPage.EXPLANATION]: "Explanation",
  [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection"
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
    <div className='pt-12'>
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

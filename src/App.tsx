import { useState, useRef, createContext, useContext, useMemo } from 'react';
import worldIcon from './assets/world.svg'
import './App.css'
import Navbar from './Navbar.tsx';
import { GeographicSelectionPage } from './geographic-selection.tsx';
import { NoteNodes } from './note-nodes.tsx';
import ReactSlider from 'react-slider'
import { D3ForceGraph } from './d3-test.tsx';

export enum AppPage {
  START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION, SVG_GENERATOR
}

export const AppPageLabels: Record<AppPage, string> = {
  [AppPage.START_SCREEN]: "Home",
  [AppPage.EXPLANATION]: "Explanation",
  [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection",
  [AppPage.SVG_GENERATOR]: "SVG Generator"
};

const timePeriods: number[] = [
  1200, 1450, 1750, 1900, 2025
];

interface TimeSliderProps {
  selectedTime: number;
  setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
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
  const [selectedTime, setSelectedTime] = useState<number>(1200);

  return (
    <TimeSliderContext.Provider value={{ selectedTime, setSelectedTime }}>
      {children}
    </TimeSliderContext.Provider>
  );
};


const TimeSlider = () => {
  const { selectedTime, setSelectedTime } = useTimeSliderContext();

  return (
    <div className="pt-21 px-4 w-full mx-auto">
      <ReactSlider
        className="h-2 bg-gray-300 rounded-full"
        thumbClassName="w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
        trackClassName="bg-blue-500"
        value={selectedTime}
        onChange={(val) => setSelectedTime(val)}
        min={timePeriods[0]}
        max={timePeriods[timePeriods.length - 1]}
        marks={timePeriods}
        step={undefined}
      />
      <p className="text-center mt-2">Time: {selectedTime}</p>
    </div>
  );
};

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
      case AppPage.SVG_GENERATOR:
        return (
          <div className="d3-grid-container">
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index} className="d3-grid-item">
                <D3ForceGraph />
              </div>
            ))}
          </div>
        );
      default:
        return <div>Error: Invalid page</div>;
    }
  };

  return (
    <div className="slide-container">
      <div className={transitioning ? 'slide slide-out' : 'slide'}>
        {renderPage(currentPage)}
      </div>
      {transitioning && (
        <div className="slide slide-in">
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
      <button onClick={() => goToPage(AppPage.SVG_GENERATOR)}>SVG Generator</button>
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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <TimeSlider />
          <PageTransition />
        </div>
      </PageTransitionProvider>
    </TimeSliderProvider>
  );
}

export default App

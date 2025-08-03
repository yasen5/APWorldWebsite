import { useState, useRef, createContext, useContext, useMemo, useEffect } from 'react';
import worldIcon from './assets/world.svg'
import './App.css'
import Navbar from './Navbar.tsx';
import { countryNotes} from './notes'
import World1200 from './assets/World-1200.svg?react';
import { NoteNodes } from './note-nodes.tsx';
import { D3ForceGraph } from './d3-test.tsx';

export enum AppPage {
  START_SCREEN, EXPLANATION, GEOGRAPHIC_SELECTION
}

export const AppPageLabels: Record<AppPage, string> = {
  [AppPage.START_SCREEN]: "Home",
  [AppPage.EXPLANATION]: "Explanation",
  [AppPage.GEOGRAPHIC_SELECTION]: "Geographic Selection"
};

const nations = Object.keys(countryNotes);

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
  const [currentPage, setCurrentPage] = useState<AppPage>(AppPage.EXPLANATION);
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
      <NoteNodes bboxSideLength={500}/>
    </div>
  );
};

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

const CountryPopup: React.FC<{ country : string, onClose: () => void }> = ({ country, onClose}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0});
  const [zoomLevel, setZoomLevel] = useState(1);
  const [bboxSideLength, setBboxSideLength] = useState(0);

  const updatePopup = () => {
    const vv = window.visualViewport;
    const popup = popupRef.current;
    if (!vv || !popup) return;

    const zoom = vv.scale;
    setZoomLevel(zoom);

    const width = window.innerWidth * 0.5;
    const height = window.innerHeight * 0.5;

    const top = vv.offsetTop + (vv.height - height / zoom) / 2;
    const left = vv.offsetLeft + (vv.width - width / zoom) / 2;

    // Removed debug statement to avoid excessive logging in production.

    setPosition({ top, left});

    setBboxSideLength(Math.min(popup.offsetWidth, popup.offsetHeight) * 1.7);
  };

  useEffect(() => {
    updatePopup();

    const vv = window.visualViewport;
    vv?.addEventListener("resize", updatePopup);
    vv?.addEventListener("scroll", updatePopup);

    return () => {
      vv?.removeEventListener("resize", updatePopup);
      vv?.removeEventListener("scroll", updatePopup);
    };
  }, []);

  return (
    <div 
      className="fixed z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div 
        ref={popupRef}
        className="w-[50vw] h-[50vh] relative overflow-y-scroll bg-[#f8f8f8] border-2 border-[#999] rounded-md shadow-lg p-6 text-left"
        style={{
          transform: `scale(${1 / zoomLevel})`,
          transformOrigin: 'top left'
        }}
      >
        <button className="[all:unset] cursor-pointer absolute top-2 right-2" onClick={onClose} aria-label="Close">x</button>
        <h2 className="font-bold" id="modal-title">{country}</h2>
        {/* {bboxSideLength > 0 && <NoteHexagon bboxSideLength={bboxSideLength} />}
        {countryNotes[country] &&
          Object.entries(countryNotes[country]).map(([sectionTitle, content]) => (
            <Dropdown key={sectionTitle} title={sectionTitle}>
              <p>{content}</p>
            </Dropdown>
          ))
        } */}
      </div>
    </div>
  );
};

const GeographicSelectionPage = () => {
  const { selectedRange } = useTimeSliderContext();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Generate random colors for each nation when component first loads
  const countryColors = useMemo(() => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
      '#F8C471', '#82E0AA', '#F1948A', '#85929E', '#D7BDE2'
    ];
    
    const colorMap: Record<string, string> = {};
    nations.forEach((nation, index) => {
      colorMap[nation] = colors[index % colors.length];
    });
    
    return colorMap;
  }, []);

  // Create styles object for SVG paths
  const countryStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    nations.forEach(nation => {
      styles[`[data-country="${nation}"]`] = {
        fill: countryColors[nation],
        cursor: 'pointer'
      };
    });
    return styles;
  }, [countryColors]);

  const mapByTime: Record<number, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    1200: World1200
  };

  const handleCountryClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGElement;
    const countryName = target.getAttribute('data-country');
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
    <style>
      {Object.entries(countryStyles).map(([selector, style]) => 
        `${selector} { ${Object.entries(style).map(([prop, value]) => 
          `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
        ).join(' ')} }`
      ).join('\n')}
    </style>
    <div className="w-full flex justify-center max-w-[800px]">
      <MapComponent
        className="svg-container"
        onClick={handleCountryClick}
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
    <D3ForceGraph />
  );
}

export default App

import { AppPage } from "./AppPageLabels";
import worldIcon from './assets/world.svg'
import { GeographicSelectionPage } from './GeographicSelection.tsx';
import { D3ForceGraph } from './SvgGenerator.tsx';
import { createContext, useContext, useState, useRef } from "react";
import { ExplanationPage } from "./Explanation.tsx";

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

interface PageTransitionProps {
  currentPage: AppPage;
  setCurrentPage: React.Dispatch<React.SetStateAction<AppPage>>;
  nextPage: AppPage;
  setNextPage: React.Dispatch<React.SetStateAction<AppPage>>;
  transitioning: boolean;
  setTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
  goToPage: (page: AppPage) => void;
}

const PageTransitionContext = createContext<PageTransitionProps | undefined>(
  undefined
);

export const usePageTransitionContext = () => {
  const context: PageTransitionProps | undefined = useContext(
    PageTransitionContext
  );
  if (!context) {
    throw new Error(
      "usePageTransitionContext must be used within a PageTransitionProvider"
    );
  }
  return context;
};

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
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
    <PageTransitionContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        nextPage,
        setNextPage,
        transitioning,
        setTransitioning,
        goToPage,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};

export const PageTransition = () => {
  const { transitioning, currentPage, nextPage, goToPage } =
    usePageTransitionContext();

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
      <div className={transitioning ? "slide slide-out" : "slide"}>
        {renderPage(currentPage)}
      </div>
      {transitioning && (
        <div className="slide slide-in">{renderPage(nextPage)}</div>
      )}
    </div>
  );
};

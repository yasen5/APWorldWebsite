import { AppPage } from "./AppPageLabels";
import worldIcon from './assets/world.svg'
import { GeographicSelectionPage } from './geographic-selection.tsx';
import { D3ForceGraph } from './SvgGenerator.tsx';
import { ExplanationPage } from "./Explanation.tsx";
import TimelinePage from "./timeline-page.tsx";
import { Unit9Page } from "./Unit9Page.tsx";
import { usePageTransitionContext } from "./page-transition-provider.tsx";

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
      case AppPage.TIMELINE:
        return <TimelinePage />;
      case AppPage.UNIT_9_NOTES:
        return <Unit9Page />;
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

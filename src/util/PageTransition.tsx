import { AppPage } from "./AppPageLabels.ts";
import { GeographicSelectionPage } from "../pages/GeographicSelection.tsx";
import { D3ForceGraph } from "../pages/SvgGenerator.tsx";
import { ExplanationPage } from "../pages/Explanation.tsx";
import TimelinePage from "../pages/timeline-page.tsx";
import { Unit9Page } from "../pages/Unit9Page.tsx";
import StartScreen from "../pages/StartScreen.tsx";
import { usePageTransitionContext } from "../providers/PageTransitionProvider.tsx";

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

import { AppPage, usePageTransitionContext } from './App';
import { useGeographicSelection } from './App';

const Navbar = () => {
  const { setSelectionStep, setSelectedRegion } = useGeographicSelection();
  const { goToPage } = usePageTransitionContext();

  const handleGeographicClick = () => {
    setSelectionStep(0); // REGION
    setSelectedRegion(null);
    goToPage(AppPage.GEOGRAPHIC_SELECTION);
  };

  return (
    <nav>
        <div className="navbar">
            <a href="#" onClick={() => goToPage(AppPage.START_SCREEN)}>Home</a>
            <a href="#" onClick={() => goToPage(AppPage.EXPLANATION)}>Explanation</a>
            <a href="#" onClick={handleGeographicClick}>Geographic Selection</a>
        </div>
    </nav>
  );
};

export default Navbar;


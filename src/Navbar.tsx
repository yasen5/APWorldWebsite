import { AppPage, AppPageLabels, usePageTransitionContext } from './App';
import { useGeographicSelection } from './App';

const Navbar = () => {
  const { setSelectionStep, setSelectedRegion } = useGeographicSelection();
  const { goToPage } = usePageTransitionContext();

  const handleGeographicClick = () => {
    setSelectionStep(0); // REGION
    setSelectedRegion(null);
    goToPage(AppPage.GEOGRAPHIC_SELECTION);
  };

  const pageRequiresCustomHandler = new Set<AppPage>([
    AppPage.GEOGRAPHIC_SELECTION,
  ]);

  return (
    <nav>
        <div className="navbar">
            {Object.entries(AppPageLabels).map(([key, label]) => {
                const page = Number(key) as AppPage;
                return (
                    <a
                        key={label}
                        href="#"
                        onClick={() => {
                            if (page === AppPage.GEOGRAPHIC_SELECTION) {
                                handleGeographicClick();
                            } else {
                                goToPage(page);
                            }
                        }}
                    > {label} </a>
                );
            })}
        </div>
    </nav>
  );
};

export default Navbar;


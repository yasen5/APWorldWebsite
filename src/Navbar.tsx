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
        <div className="fixed left-0 w-full z-[1000] bg-green-800 flex justify-center gap-6 flex-wrap">
            {Object.entries(AppPageLabels).map(([key, label]) => {
                const page = Number(key) as AppPage;
                return (
                    <a
                        className="min-w-[100px] text-white px-2 py-4 hover:underline"
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


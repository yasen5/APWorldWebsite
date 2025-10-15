import { usePageTransitionContext } from "./PageTransition.tsx";
import { AppPage, AppPageLabels } from "./AppPageLabels.ts";


const Navbar = () => {
  const { goToPage } = usePageTransitionContext();

  return (
    <nav>
      <div className="bg-green-800 flex justify-center gap-6 flex-wrap">
        {Object.entries(AppPageLabels).map(([key, label]) => {
          const page = Number(key) as AppPage;
          return (
            <a
              className="min-w-[100px] text-white px-2 py-4 hover:underline"
              key={label}
              href="#"
              onClick={() => goToPage(page)}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

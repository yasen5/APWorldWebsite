import { useState } from "react";
import { usePageTransitionContext } from "./page-transition-provider.tsx";
import { AppPage, AppPageLabels } from "./AppPageLabels.ts";

const isDev =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname.includes("dev") ||
  window.location.hostname.includes("staging");

const availablePages = isDev ? Object.entries(AppPageLabels) : Object.entries(AppPageLabels).filter(([key]) => Number(key) !== AppPage.SVG_GENERATOR);

const Navbar = () => {
  const { goToPage } = usePageTransitionContext();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white">
      <div className="flex items-center justify-between px-2 py-4">
        <button
          className="md:hidden !bg-green-800 ml-auto"
          onClick={() => setOpen(!open)}
        >
          ☰ Menu
        </button>
        <div className="hidden md:flex gap-6 mx-auto">
          {availablePages.map(([key, label]) => {
            const page = Number(key) as AppPage;
            return (
              <a
                className="min-w-[100px] px-2 py-4 hover:underline"
                key={label}
                href="#"
                onClick={() => goToPage(page)}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          {availablePages.map(([key, label]) => {
            const page = Number(key) as AppPage;
            return (
              <a
                key={label}
                href="#"
                className="py-1 border-b border-white/20"
                onClick={() => {
                  goToPage(page);
                  setOpen(false);
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

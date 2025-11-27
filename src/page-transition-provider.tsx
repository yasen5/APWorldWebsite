import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AppPage } from "./AppPageLabels";

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

export const PageTransitionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
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

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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

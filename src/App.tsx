import { useState, useEffect } from 'react';
import { PageTransition, PageTransitionProvider, usePageTransitionContext } from './PageTransition.tsx';
import './App.css'
import Navbar from './Navbar.tsx';
import { AppPage } from './AppPageLabels.ts';
import { TimeSlider, TimeSliderProvider } from "./TimeSlider.tsx"



const HeaderComponents = () => {
  const { nextPage } = usePageTransitionContext();
  return (
    <div id="header" className="fixed top-0 left-0 w-full z-50">
      <Navbar />
      {(nextPage == AppPage.GEOGRAPHIC_SELECTION) && <TimeSlider />}
    </div>
  );
};

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerEl = document.getElementById("header");
    if (!headerEl) return;

    const updateHeight = () => setHeaderHeight(headerEl.offsetHeight);
    updateHeight();

    // Observe size changes (e.g. on window resize or dynamic content)
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(headerEl);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <TimeSliderProvider>
      <PageTransitionProvider>
        <HeaderComponents />
        <div
          className='slider-container-wrapper overflow-hidden'
          style={{
            marginTop: headerHeight,
            height: `calc(100vh - ${headerHeight}px)`
          }}>
          <PageTransition />
        </div>
      </PageTransitionProvider>
    </TimeSliderProvider>
  );
}

export default App

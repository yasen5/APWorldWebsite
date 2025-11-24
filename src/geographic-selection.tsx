import { useEffect, useMemo, useRef, useState } from "react";
import { countryNotes, generalNotes } from './notes'
import World1200 from './assets/World-1200.svg?react';
import World1280 from './assets/World-1280.svg?react';
import World1300 from './assets/World-1300.svg?react';
import World1400 from './assets/World-1400.svg?react';
import World1500 from './assets/World-1500.svg?react';
import World1530 from './assets/World-1530.svg?react';
import World1600 from './assets/World-1600.svg?react';
import World1650 from './assets/World-1650.svg?react';
import World1700 from './assets/World-1700.svg?react';
import World1715 from './assets/World-1715.svg?react';
import World1785 from './assets/World-1785.svg?react';
import World1800 from './assets/World-1800.svg?react';
import World1815 from './assets/World-1815.svg?react';
import World1880 from './assets/World-1880.svg?react';
import World1900 from './assets/World-1900.svg?react';
import World1914 from './assets/World-1914.svg?react';
import World1920 from './assets/World-1920.svg?react';
import World1930 from './assets/World-1930.svg?react';
import World1938 from './assets/World-1938.svg?react';
import World1950 from './assets/World-1950.svg?react';
import World1960 from './assets/World-1960.svg?react';
import World1994 from './assets/World-1994.svg?react';
import { useTimeSliderContext } from "./TimeSlider";
import ArrowsRight from "./assets/DoubleGreenArrows.png";
import { Popup } from "./popup";

function getRandomHexColor(): string {
  // Pick random values between 128 and 255 for each channel
  const r = 128 + Math.floor(Math.random() * 128);
  const g = 128 + Math.floor(Math.random() * 128);
  const b = 128 + Math.floor(Math.random() * 128);

  const avg = (r + g + b) / 3;
  if (Math.abs(avg - r) + Math.abs(avg - g) + Math.abs(avg - b) < 50) {
    return getRandomHexColor();
  }

  // Convert each to hex and pad to 2 digits
  const hex = (n: number) => n.toString(16).padStart(2, '0');

  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

export const GeographicSelectionPage = () => {
  const { selectedTime } = useTimeSliderContext();
  const [selectedWHAPTime, setSelectedWHAPTime] = useState<[number, number]>([
    1200, 1450,
  ]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isConceptsBarOpen, setIsConceptsBarOpen] = useState(false);
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);

  const scrollMap = (direction: "left" | "right") => {
    if (mapRef.current) {
      mapRef.current.scrollBy({
        left: direction === "right" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };

  const nations = Object.keys(countryNotes);

  // Generate random colors for each nation when component first loads
  const countryColors = useMemo(() => {
    const colorMap: Record<string, string> = {};
    nations.forEach((nation) => {
      colorMap[nation] = getRandomHexColor();
    });

    return colorMap;
  }, []);

  useEffect(() => {
    setSelectedWHAPTime(() => {
      if (selectedTime < 1450) {
        return [1200, 1450];
      } else if (selectedTime < 1750) {
        return [1450, 1750];
      } else if (selectedTime < 1900) {
        return [1750, 1900];
      } else {
        return [1900, 2025];
      }
    });
  }, [selectedTime]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const updateScrollState = () => {
      setCanScrollLeft(map.scrollLeft > 0);
      setCanScrollRight(map.scrollLeft + map.clientWidth < map.scrollWidth);
    };

    map.addEventListener("scroll", updateScrollState);
    updateScrollState();

    return () => map.removeEventListener("scroll", updateScrollState);
  }, []);

  // Create styles object for SVG paths
  const countryStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    nations.forEach((nation) => {
      const isHighlighted =
        hoveredConcept &&
        generalNotes[hoveredConcept]?.applicableCountries.includes(nation);
      styles[`[data-country="${nation}"]`] = {
        fill: countryColors[nation],
        cursor: "pointer",
        opacity: isHighlighted ? 1 : hoveredConcept ? 0.3 : 1,
        stroke: isHighlighted ? "#333" : "none",
        strokeWidth: isHighlighted ? ".5px" : "0",
        transition: "opacity 0.2s ease, stroke 0.2s ease",
      };
    });
    return styles;
  }, [countryColors, hoveredConcept]);

    const timeMaps: Record<number, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
        1200: World1200,
        1280: World1280,
        1300: World1300,
        1400: World1400,
        1500: World1500,
        1530: World1530,
        1600: World1600,
        1650: World1650,
        1700: World1700,
        1715: World1715,
        1785: World1785,
        1800: World1800,
        1815: World1815,
        1880: World1880,
        1900: World1900,
        1914: World1914,
        1920: World1920,
        1930: World1930,
        1938: World1938,
        1950: World1950,
        1960: World1960,
        1994: World1994
    };

    const timePeriods: number[] = [1200, 1280, 1300, 1400, 1500, 1530, 1600, 1650, 1700, 1715, 1785, 1800, 1815, 1880, 1900, 1914, 1920, 1930, 1938, 1950, 1960, 1994, 2025];

  const getMapByTime = ():
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | undefined => {
    for (let i = 0; i < timePeriods.length; i++) {
      if (timePeriods[i] >= selectedTime) {
        return i === 0
          ? timeMaps[timePeriods[i]]
          : timeMaps[timePeriods[i - 1]];
      }
    }
  };

  const handleCountryClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGElement;
    const countryName = target.getAttribute("data-country");
    if (!countryName) return;

    if (nations.includes(countryName)) {
      setSelectedCountry(countryName);
    } else {
      alert(`No notes available for: ${countryName}`);
    }
  };

  const MapComponent = getMapByTime();

  if (!MapComponent) {
    return <div>Map not available for this time period</div>;
  }

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <div className="w-full h-full overflow-y-auto">
        <style>
          {Object.entries(countryStyles)
            .map(
              ([selector, style]) =>
                `${selector} { ${Object.entries(style)
                  .map(
                    ([prop, value]) =>
                      `${prop.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`,
                  )
                  .join(" ")} }`,
            )
            .join("\n")}
        </style>

        {/* Concepts Bar */}
        <div className="w-3/4 mx-auto">
          {/* Toggle Bar */}
          <div
            className="h-8 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer flex items-center justify-center text-white font-medium shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setIsConceptsBarOpen(!isConceptsBarOpen)}
          >
            <span className="mx-2">Cross-Country Concepts</span>
            <span className="text-lg">{isConceptsBarOpen ? "▲" : "▼"}</span>
          </div>

          {/* Collapsible Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isConceptsBarOpen ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white border-2 border-gray-200 rounded-b-lg py-1 shadow-inner">
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.keys(generalNotes)
                  .filter((concept) => {
                    const timePeriod: [number, number] =
                      generalNotes[concept].timePeriod;
                    return (
                      (timePeriod[0] >= selectedWHAPTime[0] &&
                        timePeriod[0] <= selectedWHAPTime[1]) ||
                      (timePeriod[1] > selectedWHAPTime[0] &&
                        timePeriod[1] <= selectedWHAPTime[1])
                    );
                  })
                  .map((concept) => {
                    const notes = generalNotes[concept];
                    return (
                      <button
                        key={concept}
                        onClick={() => setSelectedCountry(concept)}
                        className={`px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full text-sm font-medium hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg
                                    ${notes.emphasizedUnit[0] === selectedWHAPTime[0] && notes.emphasizedUnit[1] === selectedWHAPTime[1] && notes.timePeriod[0] <= selectedTime && notes.timePeriod[1] >= selectedTime ? "" : "opacity-50"}`}
                        onMouseEnter={() => setHoveredConcept(concept)}
                        onMouseLeave={() => setHoveredConcept(null)}
                      >
                        {concept}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* SVG viewport container */}
        <div className="relative w-full h-full flex pt-2">
          <div
            ref={mapRef}
            className="overflow-auto"
          >
            <div className="min-w-[1600px] min-h-[900px] flex justify-center items-center">
              <MapComponent
                className="svg-container"
                width={1600}
                height={900}
                onClick={handleCountryClick}
              />
            </div>
          </div>
          {["left", "right"].map((direction) => {
            return (
              ((direction === "left" && canScrollLeft) ||
                (direction === "right" && canScrollRight)) && (
                <button
                  onClick={() => scrollMap(direction)}
                  style={{ background: "none", border: "none" }}
                  className={`
                            absolute 
                            ${direction === "left" ? "left-2" : "right-2"}
                            top-1/2 
                            -translate-y-1/2 
                            p-3 
                            `}
                >
                  <img
                    src={ArrowsRight}
                    alt={`Scroll ${direction}`}
                    className={`h-10 w-10 ${direction === "left" ? "rotate-180" : ""}`}
                  />
                </button>
              )
            );
          })}
        </div>
        {selectedCountry && (() => {
          const { timePeriod, ...notes} = countryNotes[selectedCountry] || generalNotes[selectedCountry];
          return <Popup
            noteTitle={selectedCountry}
            notes={notes}
            extra={[timePeriod ? ("Time Period: " + timePeriod) : ""]}
            onClose={() => setSelectedCountry(null)}
          />
        })()}
      </div>
    </div>
  );
};
import { useEffect, useMemo, useRef, useState } from "react";
import { useTimeSliderContext } from "./App";
import { countryNotes, generalNotes} from './notes'
import World1200 from './assets/World-1200.svg?react';

// Cross-country ideas configuration
const crossCountryIdeas: Record<string, { applicableCountries: string[], notes: string }> = {
  "Trade Routes": { applicableCountries: ["France", "England", "Venice", "Byzantium", "Egypt"], notes: "Wow some cool text"},
  "Crusading States": { applicableCountries: ["France", "England", "Jerusalem", "Byzantium"], notes: "Wow some cool text"},
  "Islamic Expansion": { applicableCountries: ["Spain", "Egypt", "Jerusalem", "Byzantium"], notes: "Wow some cool text"},
  "Mongol Influence": { applicableCountries: ["Russia", "Persia", "Song Dynasty", "Byzantium"], notes: "Wow some cool text"},
  "Maritime Powers": { applicableCountries: ["Venice", "Genoa", "England", "Norway"], notes: "Wow some cool text"},
  "Scholastic Centers": { applicableCountries: ["France", "England", "Spain", "Italy"], notes: "Wow some cool text"}
};

export const GeographicSelectionPage = () => {
    const { selectedRange } = useTimeSliderContext();
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [isIdeasBarOpen, setIsIdeasBarOpen] = useState(false);
    const [hoveredIdea, setHoveredIdea] = useState<string | null>(null);

    const nations = Object.keys(countryNotes);

    // Generate random colors for each nation when component first loads
    const countryColors = useMemo(() => {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85929E', '#D7BDE2'
    ];
    
    const colorMap: Record<string, string> = {};
    nations.forEach((nation, index) => {
        colorMap[nation] = colors[index % colors.length];
    });
    
    return colorMap;
    }, []);

    // Create styles object for SVG paths
    const countryStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    nations.forEach(nation => {
        const isHighlighted = hoveredIdea && crossCountryIdeas[hoveredIdea]?.applicableCountries.includes(nation);
        styles[`[data-country="${nation}"]`] = {
        fill: countryColors[nation],
        cursor: 'pointer',
        opacity: isHighlighted ? 1 : (hoveredIdea ? 0.3 : 1),
        stroke: isHighlighted ? '#333' : 'none',
        strokeWidth: isHighlighted ? '2px' : '0',
        transition: 'opacity 0.2s ease, stroke 0.2s ease'
        };
    });
    return styles;
    }, [countryColors, hoveredIdea]);

    const mapByTime: Record<number, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    1200: World1200
    };

    const handleCountryClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGElement;
    const countryName = target.getAttribute('data-country');
    if (!countryName) return;

    if (nations.includes(countryName)) {
        setSelectedCountry(countryName);
    } else {
        alert(`No notes available for: ${countryName}`);
    }
    };

    const currentTimePeriod = selectedRange[0];
    const MapComponent = mapByTime[currentTimePeriod];

    if (!MapComponent) {
    return <div>Map not available for this time period</div>;
    }

    return (
    <div className="flex flex-col items-center justify-start w-full h-[700px]">
        <style>
            {Object.entries(countryStyles).map(([selector, style]) => 
            `${selector} { ${Object.entries(style).map(([prop, value]) => 
                `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
            ).join(' ')} }`
            ).join('\n')}
        </style>
        
        {/* Ideas Bar */}
        <div className="w-full mb-4 max-w-[1200px]">
            {/* Toggle Bar */}
            <div 
            className="w-full h-8 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer flex items-center justify-center text-white font-medium shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setIsIdeasBarOpen(!isIdeasBarOpen)}
            >
            <span className="mr-2">Cross-Country Ideas</span>
            <span className="text-lg">{isIdeasBarOpen ? "▲" : "▼"}</span>
            </div>
            
            {/* Collapsible Content */}
            <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isIdeasBarOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
            }`}
            >
            <div className="bg-white border-2 border-gray-200 rounded-b-lg p-3 shadow-inner">
                <div className="flex flex-wrap gap-2 justify-center">
                {Object.keys(crossCountryIdeas).map(idea => (
                    <button
                    key={idea}
                    onClick={() => setSelectedCountry(idea)}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full text-sm font-medium hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                    onMouseEnter={() => { setHoveredIdea(idea);  }}
                    onMouseLeave={() => setHoveredIdea(null)}
                    >
                    {idea}
                    </button>
                ))}
                </div>
            </div>
            </div>
        </div>

        <div className="w-full h-full flex justify-center max-w-[1600px]">
            <MapComponent
            className="svg-container w-full h-full"
            onClick={handleCountryClick}
            />
        </div>
        {selectedCountry && (
            <Popup
            noteKey={selectedCountry}
            onClose={() => setSelectedCountry(null)}
            />
        )}
    </div>
    );
};

const Popup: React.FC<{ noteKey : string, onClose: () => void }> = ({ noteKey, onClose}) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0});
    const [zoomLevel, setZoomLevel] = useState(1);

    const updatePopup = () => {
    const vv = window.visualViewport;
    const popup = popupRef.current;
    if (!vv || !popup) return;

    const zoom = vv.scale;
    setZoomLevel(zoom);

    const width = window.innerWidth * 0.5;
    const height = window.innerHeight * 0.5;

    const top = vv.offsetTop + (vv.height - height / zoom) / 2;
    const left = vv.offsetLeft + (vv.width - width / zoom) / 2;

    setPosition({ top, left});
    };

    useEffect(() => {
    updatePopup();

    const vv = window.visualViewport;
    vv?.addEventListener("resize", updatePopup);
    vv?.addEventListener("scroll", updatePopup);

    return () => {
        vv?.removeEventListener("resize", updatePopup);
        vv?.removeEventListener("scroll", updatePopup);
    };
    }, []);

    const matches = countryNotes[noteKey] || generalNotes[noteKey] || null;

    return (
    <div 
        className="fixed z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"
        style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        }}
    >
        <div 
        ref={popupRef}
        className="w-[50vw] h-[50vh] relative overflow-y-scroll bg-[#f8f8f8] border-2 border-[#999] rounded-md shadow-lg p-6 text-left"
        style={{
            transform: `scale(${1 / zoomLevel})`,
            transformOrigin: 'top left'
        }}
        >
        <button className="[all:unset] cursor-pointer absolute top-2 right-2" onClick={onClose} aria-label="Close">x</button>
        <h2 className="font-bold" id="modal-title">{noteKey}</h2>
        <p>Hexagon goes here</p>
        {matches &&
            Object.entries(matches).map(([sectionTitle, content]) => (
            <Dropdown key={sectionTitle} title={sectionTitle}>
                <p>{content}</p>
            </Dropdown>
            ))
        }
        </div>
    </div>
    );
};

const Dropdown: React.FC<{ title: string; children: React.ReactNode }> = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="border border-gray-300 rounded mb-2">
        <button className="w-full flex justify-between items-center p-2 bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}>
            <span className="font-medium">{title}</span>
            <span>{isOpen? "▲" : "▼"} </span>
        </button>
        {isOpen && (
            <div className="p-2 bg-white text-sm">
            {children}
            </div>
        )}
    </div>
    );
};
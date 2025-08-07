import { useEffect, useMemo, useRef, useState } from "react";
import { useTimeSliderContext } from "./App";
import { countryNotes} from './notes'
import World1200 from './assets/World-1200.svg?react';

export const GeographicSelectionPage = () => {
    const { selectedRange } = useTimeSliderContext();
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

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
        styles[`[data-country="${nation}"]`] = {
        fill: countryColors[nation],
        cursor: 'pointer'
        };
    });
    return styles;
    }, [countryColors]);

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
    <>
    <style>
        {Object.entries(countryStyles).map(([selector, style]) => 
        `${selector} { ${Object.entries(style).map(([prop, value]) => 
            `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
        ).join(' ')} }`
        ).join('\n')}
    </style>
    <div className="w-full flex justify-center max-w-[800px]">
        <MapComponent
        className="svg-container"
        onClick={handleCountryClick}
        />
    </div>
    {selectedCountry && (
        <CountryPopup
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        />
    )}
    </>
    );
};

const CountryPopup: React.FC<{ country : string, onClose: () => void }> = ({ country, onClose}) => {
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

    // Removed debug statement to avoid excessive logging in production.

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
        <h2 className="font-bold" id="modal-title">{country}</h2>
        <p>Hexagon goes here</p>
        {countryNotes[country] &&
            Object.entries(countryNotes[country]).map(([sectionTitle, content]) => (
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
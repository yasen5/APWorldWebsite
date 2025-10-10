import { useEffect, useMemo, useRef, useState } from "react";
import { useTimeSliderContext } from "./App";
import { blobNotes, countryNotes, generalNotes, noteSVGs } from './notes'
import World1200 from './assets/World-1200.svg?react';
import { createPortal } from "react-dom";

export const GeographicSelectionPage = () => {
    const { selectedTime } = useTimeSliderContext();
    const [selectedWHAPTime, setSelectedWHAPTime] = useState<[number, number]>([1200, 1450]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [isConceptsBarOpen, setIsConceptsBarOpen] = useState(false);
    const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);

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

    useEffect(() => {
        setSelectedWHAPTime(() => {
            if (selectedTime < 1450) {
                return [1200, 1450];
            }
            else if (selectedTime < 1750) {
                return [1450, 1750];
            }
            else if (selectedTime < 1900) {
                return [1750, 1900];
            }
            else {
                return [1900, 2025];
            }
        });
    }, [selectedTime]);

    // Create styles object for SVG paths
    const countryStyles = useMemo(() => {
        const styles: Record<string, React.CSSProperties> = {};
        nations.forEach(nation => {
            const isHighlighted = hoveredConcept && generalNotes[hoveredConcept]?.applicableCountries.includes(nation);
            styles[`[data-country="${nation}"]`] = {
            fill: countryColors[nation],
            cursor: 'pointer',
            opacity: isHighlighted ? 1 : (hoveredConcept ? 0.3 : 1),
            stroke: isHighlighted ? '#333' : 'none',
            strokeWidth: isHighlighted ? '2px' : '0',
            transition: 'opacity 0.2s ease, stroke 0.2s ease'
            };
        });
        return styles;
    }, [countryColors, hoveredConcept]);

    const timeMaps: Record<number, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
        1200: World1200
    };

    const timePeriods: number[] = [1200, 1450, 1750, 1900, 2025];

    const getMapByTime = (): React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined => {
        for (let i = 0; i < timePeriods.length; i++) {
            if (timePeriods[i] >= selectedTime) {
                return i === 0 ? timeMaps[timePeriods[i]] : timeMaps[timePeriods[i-1]];
            }
        }
    }

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

    const MapComponent = getMapByTime();

    if (!MapComponent) {
    return <div>Map not available for this time period</div>;
    }

    return (
    <div className="flex flex-col items-center justify-start w-full h-full">
        <div className="w-full h-full overflow-y-auto">
            <style>
                {Object.entries(countryStyles).map(([selector, style]) => 
                `${selector} { ${Object.entries(style).map(([prop, value]) => 
                    `${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
                ).join(' ')} }`
                ).join('\n')}
            </style>
            
            {/* Concepts Bar */}
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Toggle Bar */}
                <div 
                className="w-full h-8 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer flex items-center justify-center text-white font-medium shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setIsConceptsBarOpen(!isConceptsBarOpen)}
                >
                <span className="mx-2">Cross-Country Concepts</span>
                <span className="text-lg">{isConceptsBarOpen ? "▲" : "▼"}</span>
                </div>
                
                {/* Collapsible Content */}
                <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isConceptsBarOpen ? 'opacity-100' : 'max-h-0 opacity-0'
                }`}
                >
                    <div className="bg-white border-2 border-gray-200 rounded-b-lg px-3 pt-1 shadow-inner">
                        <div className="flex flex-wrap gap-2 justify-center">
                        {Object.keys(generalNotes).filter((concept) => {
                            const timePeriod: [number, number] = generalNotes[concept].timePeriod;
                            return (timePeriod[0] >= selectedWHAPTime[0] && timePeriod[0] <= selectedWHAPTime[1]) || (timePeriod[1] > selectedWHAPTime[0] && timePeriod[1] <= selectedWHAPTime[1])
                        }).map(concept => {
                            const notes = generalNotes[concept];
                            return (
                                <button
                                key={concept}
                                onClick={() => setSelectedCountry(concept)}
                                className={`px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full text-sm font-medium hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg
                                    ${(notes.emphasizedUnit[0] === selectedWHAPTime[0] && notes.emphasizedUnit[1] === selectedWHAPTime[1]) && (notes.timePeriod[0] <= selectedTime && notes.timePeriod[1] >= selectedTime) ? '' : 'opacity-50'}`}
                                onMouseEnter={() => setHoveredConcept(concept)}
                                onMouseLeave={() => setHoveredConcept(null)}
                                >
                                {concept}
                                </button>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>

            {/* SVG viewport container */}
            <div className="relative w-full h-full flex justify-center pt-2">
                <div className="overflow-auto w-full h-full max-w-[100vw] scrollbar-visible">
                    <div className="min-w-[1600px] min-h-[900px] flex justify-center items-center">
                    <MapComponent
                        className="svg-fixed-size"
                        width={1600}
                        height={900}
                        onClick={handleCountryClick}
                    />
                    </div>
                </div>
            </div>
            {selectedCountry && (
                <Popup
                noteKey={selectedCountry}
                onClose={() => setSelectedCountry(null)}
                />
            )}
        </div>
    </div>
    );
};

const Popup: React.FC<{ noteKey: string, onClose: () => void }> = ({ noteKey, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const [selectedBlob, setSelectedBlob] = useState<string | null>(null);
    const [position, setPosition] = useState({ top: 0, left: 0});
    const [zoomLevel, setZoomLevel] = useState(1);

    const viewportPercentage = 0.8;

    const updatePopup = () => {
        const vv = window.visualViewport;
        const popup = popupRef.current;
        if (!vv || !popup) return;

        const zoom = vv.scale;
        setZoomLevel(zoom);

        const top = vv.offsetTop + vv.height * (1 - viewportPercentage) / 2;
        const left = vv.offsetLeft + vv.width * (1 - viewportPercentage) / 2;

        setPosition({ top, left });
    };

    const handleBlobClick = (event: React.MouseEvent<SVGSVGElement>) => {
        const el = event.target as Element;
        const nodeEl = el.closest('[data-note-id]');
        const noteId = nodeEl?.getAttribute('data-note-id');
        if (!noteId) return;
    
        if (noteId in blobNotes) {
            setSelectedBlob(noteId);
        } else {
            alert(`No notes available for blob: ${noteId}`);
        }
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
    const SvgNotes = noteSVGs[noteKey] || null;

    return createPortal(
    <div 
        className="fixed z-[1000]" role="dialog" aria-modal="true" aria-labelledby="modal-title"
        style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
        }}
    >
        <div 
        ref={popupRef}
        className="w-[80vw] h-[80vh] relative overflow-y-scroll bg-[#f8f8f8] border-2 border-[#999] rounded-md shadow-lg p-6 text-left"
        style={{
            transform: `scale(${1 / zoomLevel})`,
            transformOrigin: 'top left'
        }}
        >
            <button className="[all:unset] cursor-pointer absolute top-2 right-2" onClick={onClose} aria-label="Close">x</button>
            <h2 className="font-bold" id="modal-title">{noteKey}</h2>
            {SvgNotes && (
                <SvgNotes onClick={handleBlobClick}/>
            )}
            {matches &&
                Object.entries(matches).map(([sectionTitle, content]) => sectionTitle !== "applicableCountries" && Array.isArray(content) && content.length > 0 && content[0] !== "" && (
                <Dropdown key={sectionTitle} title={sectionTitle}>
                    (
                        <ul className="list-disc pl-4 text-black">
                            {content.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )
                </Dropdown>
                ))
            }
        </div>
        {selectedBlob && (
            <Popup
            noteKey={selectedBlob}
            onClose={() => setSelectedBlob(null)}
            />
        )}
    </div>,
    document.body
    );
};

const Dropdown: React.FC<{ title: string; children: React.ReactNode }> = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="border border-gray-300 rounded mb-2">
        <button className="w-full flex justify-between items-center p-2 bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}>
            <span className="font-medium">{title}</span>
            <span>{isOpen ? "▲" : "▼"} </span>
        </button>
        {isOpen && (
            <div className="p-2 bg-white text-sm">
            {children}
            </div>
        )}
    </div>
    );
};
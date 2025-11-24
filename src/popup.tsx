import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const AutoscalingPopup: React.FC<{
  children: React.ReactNode;
  opaqueness?: number;
  onClose: () => void;
}> = ({ children, opaqueness, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);

  const viewportPercentage = 0.8;

  const updatePopup = () => {
    const vv = window.visualViewport;
    const popup = popupRef.current;
    if (!vv || !popup) return;

    const zoom = vv.scale;
    setZoomLevel(zoom);

    const top = vv.offsetTop + (vv.height * (1 - viewportPercentage)) / 2;
    const left = vv.offsetLeft + (vv.width * (1 - viewportPercentage)) / 2;

    setPosition({ top, left });
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

  return createPortal(
    <div
      className="fixed z-[1000]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
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
          transformOrigin: "top left",
          opacity: opaqueness || 1,
        }}
      >
        <button
          className="[all:unset] cursor-pointer absolute top-2 right-2 text-black"
          onClick={onClose}
          aria-label="Close"
          style={{ backgroundColor: "#f8f8f8", color: "black" }}
        >
          x
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export const CountryInfoLayout: React.FC<{
  countryName: string;
  notes: Record<string, string[] | [number, number] | string>;
  extra?: string[];
  links?: [string, () => void][];
}> = ({ countryName, notes, extra, links }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl text-black" id="modal-title">
        {countryName}
      </h2>
      {extra &&
        extra.map((text) => (
          <p key={text} className="!text-black">
            {text}
          </p>
        ))}
      {notes &&
        Object.entries(notes).map(
          ([sectionTitle, content]) =>
            sectionTitle !== "applicableCountries" &&
            Array.isArray(content) &&
            content.length > 0 &&
            content[0] !== "" && (
              <Dropdown key={sectionTitle} title={sectionTitle}>
                <ul className="list-disc pl-4 text-black">
                  {content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Dropdown>
            )
        )}
      {links &&
        links
          .filter(([title, _]) => title.length !== 0)
          .map(([title, onClick]) => (
            <button className="!border-black mx-2" onClick={onClick}>
              {title}
            </button>
          ))}
    </div>
  );
};

const categoryColors: Record<string, string> = {
  Culture: "#FF6B6B",
  Governance: "#4ECDC4",
  Economy: "#45B7D1",
  Social: "#96CEB4",
  Environment: "#FFEAA7",
  Technology: "#DDA0DD",
};

const Dropdown: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded mb-2">
      <button
        style={{ backgroundColor: categoryColors[title] || "#f0f0f0" }}
        className="w-full flex justify-between items-center p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-black">{title}</span>
        <span style={{ color: "black" }}>{isOpen ? "▲" : "▼"} </span>
      </button>
      {isOpen && <div className="p-2 bg-white text-sm">{children}</div>}
    </div>
  );
};

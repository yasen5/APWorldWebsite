import React, { useState, useMemo, useRef, useEffect } from "react";
import { timelineNotes } from "../notes/timeline-notes";
import { countryNotes } from "../notes/notes";
import "../App.css";
import { AutoscalingPopup, CountryInfoLayout } from "../components/Popup";
import { trackEvent } from "../util/analytics";

type TimelinePanelProps = {
  onClickEvent: (k: string) => void;
};

interface TimelineButton {
  ev: string;
  leftPx: number;
  btnWidth: number;
  lane: number;
}

const TimelinePanel: React.FC<TimelinePanelProps> = ({ onClickEvent }) => {
  const [tooltipLeft, setTooltipLeft] = useState<number>(0);
  const [buttonLeft, setButtonLeft] = useState<number>(0);
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const events = Object.keys(timelineNotes) as (keyof typeof timelineNotes)[];

  const {
    minYear,
    maxYear,
    pxPerYear,
    trackWidthPx,
    trackHeightPx,
    placements,
    laneHeight,
    laneGap,
    baseTop,
    bottomGap,
  } = useMemo(() => {
    const minYear = 1200;
    const maxYear = 2025;
    const range = Math.max(1, maxYear - minYear);

    const pxPerYear = 30;
    const trackWidthPx = Math.max(800, Math.ceil(range * pxPerYear));
    const MIN_BTN_PX = 40;

    const rawItems = events.map((ev) => {
      const evNote = timelineNotes[ev];
      const start = Number(evNote.timePeriod[0]);
      const end = Number(evNote.timePeriod[1]);
      const leftPx = Math.round((start - minYear) * pxPerYear);
      const rawWidthPx = Math.round((end - start) * pxPerYear);
      const btnWidth = Math.max(MIN_BTN_PX, rawWidthPx);

      return { ev: String(ev), start, end, leftPx, btnWidth };
    });

    // lane layout constants
    const laneHeight = 28;
    const laneGap = 12;
    const baseTop = 12;
    const bottomGap = 30; // reserve below the lowest lane so it isn't clipped

    // assign lanes (first-fit)
    const lanesEnd: number[] = [];
    const placements: Array<TimelineButton> = [];

    rawItems.forEach((item) => {
      // find lane
      let laneIndex = lanesEnd.findIndex((endX) => item.leftPx > endX + 2); // 2px gap
      if (laneIndex === -1) {
        laneIndex = lanesEnd.length;
        lanesEnd.push(item.leftPx + item.btnWidth);
      } else {
        lanesEnd[laneIndex] = item.leftPx + item.btnWidth;
      }
      placements.push({
        ev: item.ev,
        leftPx: item.leftPx,
        btnWidth: item.btnWidth,
        lane: laneIndex,
      });
    });

    // compute track height from lanes using same laneGap
    const computedHeight =
      baseTop + lanesEnd.length * (laneHeight + laneGap) + 16;
    const trackHeightPx = Math.max(96, computedHeight) + bottomGap;

    return {
      minYear,
      maxYear,
      range,
      pxPerYear,
      trackWidthPx,
      trackHeightPx,
      placements,
      laneHeight,
      laneGap,
      baseTop,
      bottomGap,
    };
  }, [events]);

  // axis position below lanes (use same bottomGap)
  const axisY = Math.max(24, trackHeightPx - bottomGap);

  const updateTooltip = () => {
    const timelineContainer = scrollContainerRef.current;

    if (!timelineContainer) {
      return;
    }

    const left =
      (Math.max(timelineContainer.scrollLeft, buttonLeft) +
        Math.min(
          timelineContainer.scrollLeft + timelineContainer.clientWidth,
          buttonLeft + buttonWidth
        )) /
        2 -
      buttonLeft;

    setTooltipLeft(left);
  };

  useEffect(() => {
    updateTooltip();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateTooltip);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateTooltip);
      }
    };
  }, [hoveredEvent, buttonLeft, buttonWidth, updateTooltip]);

  return (
    <div className="my-3">
      <div
        ref={scrollContainerRef}
        className="scroll-container rounded-2xl shadow-md"
        style={{ overflowX: "auto", padding: "8px 0 40px" }} // ensure padding-bottom >= bottomGap
      >
        <div
          style={{
            position: "relative",
            height: `${trackHeightPx}px`,
            width: `${trackWidthPx}px`,
            minWidth: `${trackWidthPx}px`,
          }}
        >
          {/* axis line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${axisY}px`,
              height: 2,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.08)",
            }}
          />

          {/* year tick marks */}
          {Array.from(
            { length: Math.floor((maxYear - minYear) / 10) + 1 },
            (_, i) => minYear + i * 10
          ).map((year) => {
            const leftPxRaw = Number(year) - Number(minYear);
            const leftPx = Math.min(
              Math.max(0, Math.round(leftPxRaw * (pxPerYear ?? 1))),
              trackWidthPx
            );
            const labelLeft = Math.min(
              Math.max(0, leftPx - 16),
              Math.max(0, trackWidthPx - 32)
            ); // keep label inside track

            return (
              <div key={year}>
                <div
                  style={{
                    position: "absolute",
                    left: `${leftPx}px`,
                    top: `${axisY - 4}px`,
                    width: "1px",
                    height: "8px",
                    backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: `${labelLeft}px`,
                    top: `${axisY - 20}px`,
                    fontSize: "11px",
                    color: "#6b7280",
                  }}
                >
                  {year}
                </div>
              </div>
            );
          })}

          {/* event buttons */}
          {placements.map((p) => {
            const topPx = baseTop + p.lane * (laneHeight + laneGap);
            return (
              <div
                key={p.ev}
                style={{
                  position: "absolute",
                  left: `${p.leftPx}px`,
                  top: `${topPx}px`,
                }}
                onMouseEnter={() => {
                  setHoveredEvent(p.ev);
                  setButtonLeft(p.leftPx);
                  setButtonWidth(p.btnWidth);
                }}
              >
                <button
                  type="button"
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => {
                    onClickEvent(p.ev);
                    trackEvent("event_popup_opened", {
                      eventName: p.ev,
                    });
                  }}
                  className="scroll-item rounded-full text-sm border hover:shadow !bg-yellow-200 dark:!bg-purple-700"
                  style={{
                    width: `${p.btnWidth}px`,
                    padding: "6px 12px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    boxSizing: "border-box",
                  }}
                >
                  {p.ev}
                </button>

                {hoveredEvent === p.ev && (
                  <div
                    style={{
                      position: "absolute",
                      top: "36px", // move tooltip higher
                      left: `${tooltipLeft}px`,
                      transform: "translateX(-50%)",
                      padding: "5px 4px",
                      fontSize: "0.875rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                      borderRadius: "6px",
                      backgroundColor: "var(--color-surface)",
                      zIndex: 10,
                      whiteSpace: "nowrap",
                      height: "30px",
                    }}
                  >
                    {p.ev}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TimelinePage: React.FC = () => {
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [openCountry, setOpenCountry] = useState<string | null>(null);

  return (
    <div className="w-full py-[16px] box-border flex flex-col justify-center">
      <div className="mt-[56px]">
        <h1 className="text-2xl font-bold mb-2">Timeline</h1>
        <p className="text-sm text-gray-600 mb-4">Scroll to see events!</p>
      </div>

      <div className="scroll-container">
        <TimelinePanel onClickEvent={(k) => setOpenEvent(k)} />
      </div>

      {openEvent &&
        (() => {
          const {
            theme,
            applicableCountries,
            emphasizedUnit,
            timePeriod,
            ...notes
          } = timelineNotes[openEvent];
          const countryButtons: [string, () => void][] =
            applicableCountries.map((countryName: string) => [
              countryName,
              () => setOpenCountry(countryName),
            ]);
          return (
            <AutoscalingPopup onClose={() => setOpenEvent(null)}>
              <CountryInfoLayout
                countryName={openEvent}
                notes={notes}
                links={countryButtons}
                extra={[
                  theme,
                  "•",
                  `${timePeriod[0]}-${timePeriod[1]}`,
                  "•",
                  `Unit: ${emphasizedUnit[0]}-${emphasizedUnit[1]}`,
                ]}
              />
            </AutoscalingPopup>
          );
        })()}

      {openCountry && (
        <AutoscalingPopup onClose={() => setOpenCountry(null)}>
          <CountryInfoLayout
            countryName={openCountry}
            notes={countryNotes[openCountry]}
          />
        </AutoscalingPopup>
      )}
    </div>
  );
};

export default TimelinePage;

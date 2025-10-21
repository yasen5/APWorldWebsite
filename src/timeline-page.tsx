import React, { useState, useMemo } from 'react';
import { timelineNotes } from './timeline-notes';
import { countryNotes } from './notes';
import "./App.css";

type TimelinePanelProps = {
  hoveredEvent: string | null;
  onHover: (k: string | null) => void;
  onClickEvent: (k: string) => void;
};

const TimelinePanel: React.FC<TimelinePanelProps> = ({ hoveredEvent, onHover, onClickEvent }) => {
  const events = Object.keys(timelineNotes) as (keyof typeof timelineNotes)[];

  const { minYear, maxYear, range, pxPerYear, trackWidthPx, trackHeightPx, placements, laneHeight, laneGap, baseTop, bottomGap } = useMemo(() => {
    const years = events.flatMap(e => timelineNotes[e].timePeriod.map(y => Number(y)));
    const minYear = 1200;
    const maxYear = 2025;
    const range = Math.max(1, maxYear - minYear);

    const pxPerYear = 30; // pixels per year
    const trackWidthPx = Math.max(800, Math.ceil(range * pxPerYear));
    const MIN_BTN_PX = 40;

    const rawItems = events.map(ev => {
      const evNote = timelineNotes[ev];
      const start = Number(evNote.timePeriod[0]);
      const end = Number(evNote.timePeriod[1]);
      const leftPx = Math.round((start - minYear) * pxPerYear);
      const rawWidthPx = Math.round((end - start) * pxPerYear);
      const btnWidth = Math.max(MIN_BTN_PX, rawWidthPx);
      const title = Array.isArray(evNote.description) ? evNote.description.join(', ') : (evNote.description ?? '');
      return { ev: String(ev), start, end, leftPx, btnWidth, title };
    });

    // lane layout constants
    const laneHeight = 28;
    const laneGap = 12;
    const baseTop = 12;
    const bottomGap = 30; // reserve below the lowest lane so it isn't clipped

    // assign lanes (first-fit)
    const lanesEnd: number[] = [];
    const placements: Array<{
      ev: string;
      leftPx: number;
      btnWidth: number;
      lane: number;
      title: string;
    }> = [];

    rawItems.forEach(item => {
      // find lane
      let laneIndex = lanesEnd.findIndex(endX => item.leftPx > endX + 2); // 2px gap
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
        title: item.title,
      });
    });

    // compute track height from lanes using same laneGap
    const computedHeight = baseTop + lanesEnd.length * (laneHeight + laneGap) + 16;
    const trackHeightPx = Math.max(96, computedHeight) + bottomGap;

    return { minYear, maxYear, range, pxPerYear, trackWidthPx, trackHeightPx, placements, laneHeight, laneGap, baseTop, bottomGap };
  }, [events]);

  // axis position below lanes (use same bottomGap)
  const axisY = Math.max(24, trackHeightPx - bottomGap);

  return (
    <div className="my-3">
      <div
        className="scroll-container rounded-2xl shadow-md"
        style={{ overflowX: 'auto', padding: '8px 0 40px' }} // ensure padding-bottom >= bottomGap
      >
        <div
          style={{
            position: 'relative',
            height: `${trackHeightPx}px`,
            width: `${trackWidthPx}px`,
            minWidth: `${trackWidthPx}px`
          }}
        >
          {/* axis line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `${axisY}px`,
              height: 2,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.08)',
            }}
          />

          {/* year tick marks*/}
          {Array.from(
            { length: Math.floor((maxYear - minYear) / 50) + 1 },
            (_, i) => minYear + i * 10
          ).map(year => {
            const leftPxRaw = Number(year) - Number(minYear);
            const leftPx = Math.min(Math.max(0, Math.round(leftPxRaw * (pxPerYear ?? 1))), trackWidthPx);
            const labelLeft = Math.min(Math.max(0, leftPx - 16), Math.max(0, trackWidthPx - 32)); // keep label inside track

            return (
              <div key={year}>
                <div
                  style={{
                    position: 'absolute',
                    left: `${leftPx}px`,
                    top: `${axisY - 4}px`,
                    width: '1px',
                    height: '8px',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: `${labelLeft}px`,
                    top: `${axisY - 20}px`,
                    fontSize: '11px',
                    color: '#6b7280',
                  }}
                >
                  {year}
                </div>
              </div>
            );
          })}

          {/* event buttons */}
          {placements.map(p => {
  const topPx = baseTop + p.lane * (laneHeight + laneGap);
  return (
    <div 
      key={p.ev} 
      style={{ position: 'absolute', left: `${p.leftPx}px`, top: `${topPx}px` }}
    >
      <button
        type="button"
        onMouseEnter={() => onHover(p.ev)}
        onMouseLeave={() => onHover(null)}
        onClick={() => onClickEvent(p.ev)}
        className="scroll-item rounded-full text-sm border hover:shadow bg-white"
        style={{
          width: `${p.btnWidth}px`,
          padding: '6px 12px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxSizing: 'border-box'
        }}
      >
        {p.ev}
      </button>

      {hoveredEvent === p.ev && (
        <div
          style={{
            position: 'absolute',
            top: '36px', // move tooltip higher
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 4px', // bigger tooltip
            fontSize: '0.875rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            borderRadius: '6px',
            backgroundColor: 'var(--color-surface)',
            zIndex: 10,
            whiteSpace: 'nowrap',
            height: '30px',
          }}
        >
          {p.title || p.ev}
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
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [openCountry, setOpenCountry] = useState<string | null>(null);

  return (
    <div className="timeline-wrapper">
      <div className="timeline-inner">
        <div className="self-start mt-56px">
          <h1 className="text-2xl font-bold mb-2">Timeline</h1>
          <p className="text-sm text-gray-600 mb-4">Scroll to see events!</p>
        </div>

        <div className="scroll-container">
          <TimelinePanel
            hoveredEvent={hoveredEvent}
            onHover={(k) => setHoveredEvent(k)}
            onClickEvent={(k) => setOpenEvent(k)}
          />
        </div>

        {openEvent && (() => {
          const evKey = openEvent as keyof typeof timelineNotes;
          const evNote = timelineNotes[evKey];
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
              <div className="bg-white p-6 rounded max-w-lg w-full">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg">{openEvent}</h2>
                  <button type="button" onClick={() => setOpenEvent(null)}>x</button>
                </div>

                <div className="text-sm text-gray-700 mb-3">
                  <div>
                    <strong>Time:</strong> {evNote.timePeriod[0]} — {evNote.timePeriod[1]}
                  </div>
                  {evNote.description && Array.isArray(evNote.description) && evNote.description.length > 0 && (
                    <div className="mt-1 italic">{evNote.description.join(' ')}</div>
                  )}
                  {evNote.description && !Array.isArray(evNote.description) && (
                    <div className="mt-1 italic">{String(evNote.description)}</div>
                  )}
                </div>

                <div>
                  <strong>Applicable countries:</strong>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {evNote.applicableCountries.map((c, idx) => (
                      <button
                        key={`${String(c)}-${idx}`}
                        type="button"
                        onClick={() => setOpenCountry(String(c))}
                        className="text-sm px-2 py-1 border rounded"
                      >
                        {String(c)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {openCountry && (
  <div className="fixed inset-0 z-60 flex items-center justify-center pointer-events-none">
    <div
      className="w-[80vw] h-[80vh] max-w-[90vw] max-h-[85vh] relative overflow-auto bg-[#f8f8f8] border-2 border-[#999] rounded-md shadow-lg p-6 text-left pointer-events-auto"
      style={{ transformOrigin: 'top left' }}
    >
      <button
        className="[all:unset] cursor-pointer absolute top-2 right-2"
        type="button"
        onClick={() => setOpenCountry(null)}
        aria-label="Close"
      >
        x
      </button>

      <h2 className="font-bold text-2xl text-black mb-4">{openCountry}</h2>

      {countryNotes[String(openCountry)] ? (
        <div className="text-black space-y-4">
          {Object.entries(countryNotes[String(openCountry)]).map(
            ([sectionTitle, content]) =>
              sectionTitle !== "applicableCountries" &&
              Array.isArray(content) &&
              content.length > 0 &&
              content[0] !== "" && (
                <div key={sectionTitle}>
                  <div className="font-semibold mb-1">{sectionTitle}</div>
                  <ul className="list-disc pl-4">
                    {content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      ) : (
        <div className="text-sm text-gray-600">
          No country notes available.
        </div>
      )}
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default TimelinePage;
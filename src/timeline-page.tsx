import React, { useState, useMemo } from 'react';
import { timelineNotes } from './timeline-notes';
import { countryNotes } from './notes';
import "./App.css";

type TimelinePanelProps = {
  onHover: (k: string | null) => void;
  onClickEvent: (k: string) => void;
};

const TimelinePanel: React.FC<TimelinePanelProps> = ({ onHover, onClickEvent }) => {
  const events = Object.keys(timelineNotes) as (keyof typeof timelineNotes)[];

  const { minYear, maxYear, positions, trackWidthPx } = useMemo(() => {
    const years = events.flatMap(e => timelineNotes[e].timePeriod.map(y => Number(y)));
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const range = maxYear - minYear || 1;

    // choose track width proportional to range so it can scroll
    const pxPerYear = 8; // tweak this to compress/expand timeline
    const trackWidthPx = Math.max(800, Math.ceil(range * pxPerYear));

    const positions: Record<string, number> = {};
    events.forEach(ev => {
      const [sRaw, tRaw] = timelineNotes[ev].timePeriod;
      const s = Number(sRaw);
      const t = Number(tRaw);
      const mid = (s + t) / 2;
      const pct = ((mid - minYear) / range) * 100;
      positions[String(ev)] = Math.max(0, Math.min(100, pct));
    });

    return { minYear, maxYear, positions, trackWidthPx };
  }, [events]);

  return (
    <div className="my-3">
      {/* scrollable container */}
      <div className="scroll-container" style={{ overflowX: 'auto', padding: '8px 0' }}>
        {/* fixed-height track with explicit wide width */}
        <div
          className="timeline-track"
          style={{
            position: 'relative',
            height: 96,
            width: `${(useMemo as any) ? '' : ''}${/* placeholder to keep TS happy */ ''}`, // kept for minimal change, overwritten below
          }}
        >
          {/* real track element with computed width */}
          <div
            style={{
              position: 'relative',
              height: '100%',
              width: `${trackWidthPx}px`,
              minWidth: `${trackWidthPx}px`,
            }}
          >
            {/* axis line */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                height: 2,
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0,0,0,0.08)',
              }}
            />

            {/* year labels at ends */}
            <div style={{ position: 'absolute', left: 4, top: '62%', fontSize: 12, color: '#6b7280' }}>
              {minYear}
            </div>
            <div style={{ position: 'absolute', right: 4, top: '62%', fontSize: 12, color: '#6b7280' }}>
              {maxYear}
            </div>

            {/* event buttons positioned by percent across the wide track */}
            {events.map(ev => {
                const evNote = timelineNotes[ev];
                const [startRaw, endRaw] = evNote.timePeriod;
                const start = Number(startRaw);
                const end = Number(endRaw);
                const leftPct = ((start - minYear) / (maxYear - minYear)) * 100;
                const widthPct = ((end - start) / (maxYear - minYear)) * 100;
                const title = Array.isArray(evNote.description) ? evNote.description.join(', ') : (evNote.description ?? '');

                let labelTransform = 'translate(-50%, -100%)';
                if (leftPct < 6) labelTransform = 'translate(0, -100%)'; // in case it will be cut off on the left
                if (leftPct + widthPct < 6) labelTransform = 'translate(-100%, -100%)';
                return (
                    <div
                    key={String(ev)}
                    style={{ position: 'absolute', left: `${leftPct}%`, width: `${Math.max(widthPct, 0.5)}%`, top: '25%', height: '50%',
                    }}
                    >
                    {/* Range bar - need to change this bc this is not at all what we want but might be good code to save for what we actually need*/}
                    <div
                        style={{
                        position: 'absolute',
                        top: '40%',
                        left: 0,
                        right: 0,
                        height: 6,
                        backgroundColor: 'rgba(59,130,246,0.4)', // blue translucent
                        borderRadius: 3,
                        transform: 'translateY(-50%)'
                        }}
                    />
                    {/* Label button */}
                    <button
                        type="button"
                        onMouseEnter={() => onHover(String(ev))}
                        onMouseLeave={() => onHover(null)}
                        onClick={() => onClickEvent(String(ev))}
                        title={title}
                        className="scroll-item rounded-full text-sm border hover:shadow bg-white"
                        style={{
                        position: 'absolute',
                        left: '${Math.min(Math.max(50, (widthPct === 100 ? 50 : 50)), 50)}%',
                        transform: labelTransform,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        padding: '4px 8px',
                        }}
                    >
                        {String(ev)}
                    </button>
                    </div>
                );
            })}
          </div>
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
                  <button type="button" onClick={() => setOpenEvent(null)}>Close</button>
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
          <div className="fixed right-6 bottom-6 z-40 w-96 bg-white border p-4 rounded shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{openCountry}</h3>
              <button type="button" onClick={() => setOpenCountry(null)}>x</button>
            </div>

            {countryNotes[String(openCountry)] ? (
              <div className="text-sm space-y-2 max-h-64 overflow-auto">
                {Object.entries(countryNotes[String(openCountry)]).map(([section, content]) => (
                  Array.isArray(content) && content.length > 0 ? (
                    <div key={section}>
                      <strong>{section}</strong>
                      <ul className="list-disc pl-5 text-sm">
                        {content.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </div>
                  ) : null
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-600">No country notes available.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
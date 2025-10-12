import { useMemo, useState } from "react";
import { useTimeSliderContext } from './App';
import { timelineNotes } from './timeline-notes';
import { countryNotes } from './notes';

type TimelinePanelProps = {
    onHover: (k: string | null) => void;
    onClickEvent: (k: string) => void;
};

const TimelinePanel: React.FC<TimelinePanelProps> = ({ onHover, onClickEvent }) => {
    const events = Object.keys(timelineNotes);
    return (
        <div className="my-3 flex flex-wrap gap-2 justify-center">
            {events.map(ev => {
                const evNote = timelineNotes[ev];
                return (
                    <button
                    key={ev}
                    onMouseEnter={() => onHover(ev)}
                    onMouseLeave={() => onHover(null)}
                    onClick={() => onClickEvent(ev)}
                    className="px-3 py=1 rounded-full text-sm border bg-white hover:shadow"
                    title={ev}
                    >
                        {ev}
                    </button>
                );
            })}
        </div>
    );
};

const TimelinePage: React.FC = () => {
  const { selectedTime } = useTimeSliderContext(); // optional use elsewhere
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [openCountry, setOpenCountry] = useState<string | null>(null);

  const events = Object.keys(timelineNotes);

  return (
    <div className="self-start mt-56px px-6 pt-2 w-full relative">
      <h1 className="text-2xl font-bold mb-2">pls work</h1>
      <p className="text-sm text-gray-600 mb-4">Subheading if we want</p>

      {/* <TimelinePanel
        onHover={(k) => setHoveredEvent(k)}
        onClickEvent={(k) => setOpenEvent(k)}
      />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(ev => {
          const note = timelineNotes[ev];
          return (
            <div key={ev} className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{ev}</h3>
                  <div className="text-sm text-gray-600">{note.timePeriod[0]} — {note.timePeriod[1]}</div>
                </div>
                <button className="text-sm underline" onClick={() => setOpenEvent(ev)}>Details</button>
              </div>
              <div className="mt-2">
                <strong>Countries:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {note.applicableCountries.map(c => (
                    <button
                      key={String(c)}
                      className="text-xs px-2 py-0.5 border rounded"
                      onClick={() => setOpenCountry(String(c))}
                    >
                      {String(c)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* Event modal
      {openEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white p-6 rounded max-w-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg">{openEvent}</h2>
              <button onClick={() => setOpenEvent(null)}>Close</button>
            </div>

            <div className="text-sm text-gray-700 mb-3">
              <div><strong>Time:</strong> {timelineNotes[openEvent].timePeriod[0]} — {timelineNotes[openEvent].timePeriod[1]}</div>
            </div>

            <div>
              <strong>Applicable countries:</strong>
              <ul className="list-disc pl-5 mt-2">
                {timelineNotes[openEvent].applicableCountries.map(c => (
                  <li key={String(c)} className="mb-1">
                    <button className="underline" onClick={() => { setOpenCountry(String(c)); }}>
                      {String(c)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )} */}

      {/* Country quick panel */}
      {openCountry && (
        <div className="fixed right-6 bottom-6 z-40 w-96 bg-white border p-4 rounded shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">{openCountry}</h3>
            <button onClick={() => setOpenCountry(null)}>x</button>
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
          ) : <div className="text-sm text-gray-600">No country notes available.</div>}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
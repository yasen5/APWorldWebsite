export const ExplanationPage = () => {
    return (
      <div className="self-start text-left max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
          Tutorial
        </h1>
  
        {/* Section: Notes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Where do I find the notes?
          </h2>
          <p className="text-gray-600 mb-4">
            Click on Geographic Selection in the navbar ^ to get started with the notes.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Click on countries to bring up a notes popup.</li>
            <li>Use the dropdown boxes to explore topics like <span className="italic">Environment</span> or <span className="italic">Governance</span>.</li>
            <li>Click the <span className="font-medium">“X”</span> in the top-left corner to exit a popup.</li>
            <li>Click the <span className="font-medium">Cross-Country Concepts</span> bar to explore broader events and ideas.</li>
            <li>Hovering over a concept highlights related countries.</li>
            <li>Clicking on one brings up a detailed popup.</li>
            <li>Use the timeline slider to explore different time periods and their corresponding notes.</li>
          </ul>
        </section>
  
        {/* Section: Google Docs */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            What if I want these notes on a Google Doc?
          </h2>
          <p className="text-gray-600 mb-1">Shorter version:</p>
          <a
            href="https://docs.google.com/document/d/1Vy_PpP3PiGguyP2nL_sVzhWboEFhhI0p8QUyJN08PIQ/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all block mb-2"
          >
            https://docs.google.com/document/d/1Vy_PpP3PiGguyP2nL_sVzhWboEFhhI0p8QUyJN08PIQ/edit?tab=t.0
          </a>
          <p className="text-gray-600 mb-1">Longer version:</p>
          <a
            href="https://docs.google.com/document/d/1FlLUP4s2Bxt7bXvDf4kNHZpg0HFOUcWcdKb9H7HcWTk/edit?tab=t.hu6rpiaws425#heading=h.o1d1i5iz5iv4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            https://docs.google.com/document/d/1FlLUP4s2Bxt7bXvDf4kNHZpg0HFOUcWcdKb9H7HcWTk/edit?tab=t.hu6rpiaws425#heading=h.o1d1i5iz5iv4
          </a>
        </section>
  
        {/* Section: Feedback */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            How can I improve this website?
          </h2>
          <p className="text-gray-600">
            Please email either <span className="font-medium">Yasen</span> or <span className="font-medium">Mylan</span> if you have suggestions.
            <br />
            If you’d like to be part of the GitHub repository to more directly contribute, please schedule a meeting.
          </p>
        </section>
      </div>
    );
  };
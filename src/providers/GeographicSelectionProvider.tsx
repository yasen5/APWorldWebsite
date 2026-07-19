import { createContext, useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api";
import quizComparisons from "../generated/quizComparisons.json";

export interface ValidComparison {
  id: string;
  timePeriod: [number, number];
  country1: string;
  country2: string;
}

export interface TrackedComparison {
  comparison: ValidComparison;
  used: boolean;
}

interface GeographicPageProps {
  selectedCountry: string | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredConcept: string | null;
  setHoveredConcept: React.Dispatch<React.SetStateAction<string | null>>;
  validComparisons: TrackedComparison[] | undefined;
  setValidComparisons: React.Dispatch<
    React.SetStateAction<TrackedComparison[] | undefined>
  >;
  trackedComparisons: TrackedComparison[];
  setTrackedComparisons: React.Dispatch<
    React.SetStateAction<TrackedComparison[]>
  >;
}

const GeographicPageContext = createContext<GeographicPageProps | undefined>(
  undefined
);

export const GeographicPageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);
  const [validComparisons, setValidComparisons] = useState<TrackedComparison[] | undefined>();
  const [trackedComparisons, setTrackedComparisons] = useState<
    TrackedComparison[]
  >(() =>
    quizComparisons.map((comparison) => ({
      comparison: comparison as ValidComparison,
      used: false,
    }))
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadComparisons() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/comparisons`, {
          signal: controller.signal,
        });
        const data = await response.json();
        if (!response.ok || !Array.isArray(data.comparisons)) {
          throw new Error(data.error ?? "Unable to load comparison quizzes");
        }
        setTrackedComparisons(
          data.comparisons.map((comparison: ValidComparison) => ({
            comparison,
            used: false,
          }))
        );
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.warn(
            "Using the bundled comparison catalog because the API catalog was unavailable",
            error
          );
        }
      }
    }

    loadComparisons();
    return () => controller.abort();
  }, []);

  return (
    <GeographicPageContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        hoveredConcept,
        setHoveredConcept,
        validComparisons,
        setValidComparisons,
        trackedComparisons,
        setTrackedComparisons
      }}
    >
      {children}
    </GeographicPageContext.Provider>
  );
};

export const useGeographicPageContext = () => {
  const context = useContext(GeographicPageContext);
  if (!context) {
    throw new Error(
      "useGeographicPageContext must be used within a GeographicPageProvider"
    );
  }
  return context;
};

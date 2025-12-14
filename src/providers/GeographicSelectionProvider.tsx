import { createContext, useContext, useState } from "react";
import { comparisons, type ValidComparison } from "../notes/quiz-notes";

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
  >(
    comparisons.map((comparison: ValidComparison) => {
      return { comparison: comparison, used: false };
    })
  );

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

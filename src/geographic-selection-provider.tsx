import { createContext, useContext, useState } from "react";

interface GeographicPageProps {
  selectedCountry: string | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredConcept: string | null;
  setHoveredConcept: React.Dispatch<React.SetStateAction<string | null>>;
  presentNations: string[];
  setPresentNations: React.Dispatch<React.SetStateAction<string[]>>;
  quizSelectedCountries: string[];
  setQuizSelectedCountries: React.Dispatch<React.SetStateAction<string[]>>;
}

const GeographicPageContext = createContext<GeographicPageProps | undefined>(
  undefined
);

export const GeographicPageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  console.log("PROVIDER REMOUNTED");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);
  const [presentNations, setPresentNations] = useState<string[]>([]);
  const [quizSelectedCountries, setQuizSelectedCountries] = useState<string[]>(
    []
  );

  return (
    <GeographicPageContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        hoveredConcept,
        setHoveredConcept,
        presentNations,
        setPresentNations,
        quizSelectedCountries,
        setQuizSelectedCountries,
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

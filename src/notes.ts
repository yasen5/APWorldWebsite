export interface CountryNotes {
    [countryName: string]: {
        [section: string]: string;
    };
}

export const countryNotes: CountryNotes = {
    "Abbasid Caliphate (750-1258)": {
        "Environment": "yay environment notes",
        "Culture": "yay culture notes",
        "Governance": "yay governance notes",
        "Economy": "yay economy notes",
        "Social": "yay social notes",
        "Technology": "yay technology notes"
    }
    //more countries will go here
}
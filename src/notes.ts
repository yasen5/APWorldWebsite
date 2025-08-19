import SongDynastyBlob from "./assets/song-dynasty-blob2.svg?react"

export interface CountryNotes {
    [country: string]: {
        [section: string]: string;
    };
}

export const noteSVGs: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
      /* Put the country name EXACTLY as it appears in the country svgs, then the note svg that was generated for it */
      "Song Dynasty": SongDynastyBlob,
}

/* Note id/summary, then actual notes */
export const blobNotes: Record<string, string> = {
      "Note number 0 with category Government": "Literally nothing lol"
}

export const generalNotes: CountryNotes = {
      "Trade Routes": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      }
}

export const countryNotes: CountryNotes = {
      "Song Dynasty": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Rajput Kingdoms": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Delhi Sultanate": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Chola Dynasty": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"},
      "Khmer Empire": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Srivijaya Empire": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Great Zimbabwe": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Swahili Coast": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Fatimid Caliphate": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Ghana Empire": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Mali Empire": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Venice": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Byzantine Empire": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Sweden": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Denmark": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Holy Roman Empire": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Castilla": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Navarre": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Portugal": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "France": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Aragon": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      "Mayan city states": {
            "Environment": "yay environment notes",
            "Culture": "yay culture notes",
            "Governance": "yay governance notes",
            "Economy": "yay economy notes",
            "Social": "yay social notes",
            "Technology": "yay technology notes"
      },
      //more countries will go here
}
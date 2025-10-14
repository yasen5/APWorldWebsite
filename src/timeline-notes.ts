import { countryNotes } from './notes';

export interface TimelineNotes {
    [event: string] : {
        timePeriod: [number, number];
        emphasizedUnit?: [number, number];
        applicableCountries: (keyof typeof countryNotes)[];
        description?: string[];
        causes?: string[];
        effects?: string[];
        theme: string;
    };
}

export const timelineNotes: TimelineNotes = {
    "4th Crusade": {
        timePeriod: [1202, 1204],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450", "France 1200-1450", "Holy Roman Empire 1200-1806"],
        theme: "governance"
    },
    "Mongol conquest" : {
        timePeriod: [1207, 1260],
        emphasizedUnit: [1200, 1450],
        applicableCountries: [""],
        description: [""],
        causes: [""],
        effects: [""],
        theme: "governance"
    },
    "World War II": {
        timePeriod: [1938, 1945],
        emphasizedUnit: [1200, 1450],
        applicableCountries: [""],
        description: [""],
        theme: "governance"
    },
    "Hi": {
        timePeriod: [1204, 1206],
        emphasizedUnit: [1200, 1450],
        applicableCountries: [""],
        description: [""],
        causes: [""],
        effects: [""],
        theme: "governance"
    }
}
// events will go here
// "Template" : {
//         timePeriod: [, ],
//         emphasizedUnit: [, ],
//         applicableCountries: "",
//         description: "",
//         causes: "",
//         effects: "",
//         theme: ""
//     };
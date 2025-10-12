import { countryNotes } from './notes';

export interface TimelineNotes {
    [event: string] : {
        timePeriod: [number, number];
        emphasizedUnit: [number, number];
        applicableCountries: (keyof typeof countryNotes)[];
    };
}

export const timelineNotes: TimelineNotes = {
    "hi": {
        timePeriod: [1200, 1201],
        emphasizedUnit: [1200, 1450],
        applicableCountries: ["England 1200-1450"]
    },
}
// events will go here
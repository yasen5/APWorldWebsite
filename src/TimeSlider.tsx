import { useState, createContext, useContext } from 'react';
import ReactSlider from 'react-slider'

const timePeriods: number[] = [
    1200, 1450, 1750, 1900, 2025
];

interface TimeSliderProps {
    selectedTime: number;
    setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
}

const TimeSliderContext = createContext<TimeSliderProps | undefined>(undefined);

export const useTimeSliderContext = () => {
    const context: TimeSliderProps | undefined = useContext(TimeSliderContext);
    if (!context) {
    throw new Error('useTimeSliderContext must be used within a TimeSliderProvider');
    }
    return context;
};

interface TimeSliderProviderProps {
    children: React.ReactNode;
}

export const TimeSliderProvider: React.FC<TimeSliderProviderProps> = ({ children }) => {
    const [selectedTime, setSelectedTime] = useState<number>(1200);

    return (
    <TimeSliderContext.Provider value={{ selectedTime, setSelectedTime }}>
        {children}
    </TimeSliderContext.Provider>
    );
};


export const TimeSlider = () => {
    const { selectedTime, setSelectedTime } = useTimeSliderContext();

    return (
    <div className="pt-5 px-4 w-full mx-auto">
        <ReactSlider
        className="h-2 bg-gray-300 rounded-full"
        thumbClassName="w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
        trackClassName="bg-blue-500"
        markClassName="slider-mark"
        value={selectedTime}
        onChange={(val) => setSelectedTime(val)}
        min={timePeriods[0]}
        max={timePeriods[timePeriods.length - 1]}
        marks={timePeriods}
        step={undefined}
        renderMark={(props) => {
            const { key, ...rest } = props; // Destructure key from props
            const markValue = key; // Use the key as the mark value
            return (
            <div key={key} {...rest} className="slider-mark-label">
                {markValue}
            </div>
            );
        }}
        />
        <p className="text-center mt-2">Time: {selectedTime}</p>
    </div>
    );
};
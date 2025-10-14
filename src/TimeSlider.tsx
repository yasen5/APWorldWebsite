import { useState, createContext, useContext } from "react";
import * as Slider from "@radix-ui/react-slider";

const timePeriods: number[] = [1200, 1450, 1750, 1900, 2025];

interface TimeSliderProps {
  selectedTime: number;
  setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
}

const TimeSliderContext = createContext<TimeSliderProps | undefined>(undefined);

export const useTimeSliderContext = () => {
  const context = useContext(TimeSliderContext);
  if (!context) {
    throw new Error("useTimeSliderContext must be used within a TimeSliderProvider");
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
    <div className="pt-5 px-4 w-full">
      {/* Slider Root */}
      <Slider.Root
        className="relative flex"
        min={timePeriods[0]}
        max={timePeriods[timePeriods.length - 1]}
        value={[selectedTime]}
        onValueChange={(v) => setSelectedTime(v[0])}
      >
        {/* Track and range */}
        <Slider.Track className="bg-gray-300 relative grow rounded-full h-2">
          <Slider.Range className="bg-blue-500 rounded-full h-full" />
        </Slider.Track>

        {/* Marks */}
        {timePeriods.map((mark) => {
          const left = ((mark - timePeriods[0]) /
            (timePeriods[timePeriods.length - 1] - timePeriods[0])) * 100;
          return (
            <div key={mark} className="absolute top-3" style={{ left: `${left}%` }} role="presentation">
              <div className="w-[2px] h-3 bg-gray-500 mx-auto" aria-hidden="true"></div>
              <div className="text-xs text-gray-600 text-center mt-1 -translate-x-1/2" aria-hidden="true">
                {mark}
              </div>
            </div>
          );
        })}

        {/* Thumb */}
        <Slider.Thumb
          className="block w-4 h-4 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Time"
        />
      </Slider.Root>

      <p className="text-center mt-2">Time: {selectedTime}</p>
    </div>
  );
};

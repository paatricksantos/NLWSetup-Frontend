import { generateDatesFromBeginning } from "../../utils/generate-dates-from-beginning";
import { HabitDay } from "../HabitDay";

export const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromBeginning();
const minimumSummaryDatesSize = 18 * 7;
const amountOfDatesToFill = minimumSummaryDatesSize - summaryDates.length;
export function SummaryTable() {
  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 gap-3 grid-flow-col">
        {summaryDates?.map((date, index) => (
          <HabitDay key={`${date.toString()}-${index}`} />
        ))}
        {amountOfDatesToFill > 0 &&
          Array.from({ length: amountOfDatesToFill }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
}

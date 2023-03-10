import * as Checkbox from "@radix-ui/react-checkbox";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { ProgressBar } from "../ProgressBar";

interface HabitProps {
  amount?: number;
  completed?: number;
  date: Date;
}

export function HabitDay({ completed = 0, amount = 0, date }: HabitProps) {
  const completedPercentage = amount > 0 ? (completed / amount) * 100 : 0;
  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10  rounded-lg", {
          "bg-zinc-900 border-2 border-zinc-800": completedPercentage === 0,
          "bg-violet-900 border-violet-800 ":
            completedPercentage > 0 && completedPercentage < 20,
          "bg-violet-900 border-violet-700 ":
            completedPercentage >= 20 && completedPercentage < 40,
          "bg-violet-800 border-violet-600 ":
            completedPercentage >= 40 && completedPercentage < 60,
          "bg-violet-700 border-violet-500 ":
            completedPercentage >= 60 && completedPercentage < 80,
          "bg-violet-600 border-violet-400 ": completedPercentage >= 80,
          "bg-violet-500 border-violet-400": completedPercentage === 100,
        })}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>
          <ProgressBar progress={completedPercentage} />
          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} weight="bold" className="text-white" />
                </Checkbox.Indicator>
              </div>
              <span className="font-semibold text-white text-xl leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400 group-data-[state=checked]:italic group-data-[state=checked]:font-light">
                Beber 2L de ??gua
              </span>
            </Checkbox.Root>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

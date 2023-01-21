import dayjs from "dayjs";

export function generateDatesFromBeginning() {
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfTheYear;
  while (compareDate.isBefore(today)) {
    dates.push(firstDayOfTheYear);
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}

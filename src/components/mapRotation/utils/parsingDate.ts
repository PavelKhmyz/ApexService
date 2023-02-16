export const parsingDate = () => {
  const isLessThanTen = (value: number) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  const parseHours = (date: Date) => {
    const hours = date.getHours();
    return isLessThanTen(hours);
  };
  const parseMinutes = (date: Date) => {
    const minutes = date.getMinutes();
    return isLessThanTen(minutes);
  };
  const parseSeconds = (date: Date) => {
    const seconds = date.getSeconds();
    return isLessThanTen(seconds);
  };
  const parseHoursWithTimeZone = (date: Date, decrement?: boolean) => {
    if (decrement) {
      const decrementedDate = new Date(date.setHours(date.getHours() - 3));
      return parseHours(decrementedDate);
    }
    const incrementedDate = new Date(date.setHours(date.getHours() + 3));
    return parseHours(incrementedDate);
  };

  return {
    parseReminingTime: (time: number | null) => {
      if (time) {
        const date = new Date(time * 1000);
        const hours = parseHoursWithTimeZone(date, true);
        const minutes = parseMinutes(date);
        const seconds = parseSeconds(date);
        return `Time remining: ${hours}:${minutes}:${seconds}`;
      }
      return null;
    },
    parseTime: (inputDate: string) => {
      const date = new Date(inputDate);
      const hours = parseHoursWithTimeZone(date);
      const minutes = parseMinutes(date);
      return `${hours}:${minutes}`;
    },
  };
};

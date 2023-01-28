export const parseTime = (time: number | null) => {
  if (time) {
    const date = new Date(time * 1000);
    const hours = () => {
      const hrs = date.getUTCHours();
      if (hrs < 10) {
        return `0${hrs}`;
      }
      return hrs;
    };
    const minutes = () => {
      const min = date.getMinutes();
      if (min < 10) {
        return `0${min}`;
      }
      return min;
    };
    const seconds = () => {
      const sec = date.getSeconds();
      if (sec < 10) {
        return `0${sec}`;
      }
      return sec;
    };
    return `Time remining: ${hours()}:${minutes()}:${seconds()}`;
  }
  return null;
};

export const parseDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const changeDate = new Date(date.setHours(date.getHours() + 3));
  const hours = () => {
    const hrs = changeDate.getHours();
    if (hrs < 10) {
      return `0${hrs}`;
    }
    return hrs;
  };
  const minutes = () => {
    const min = changeDate.getMinutes();
    if (min < 10) {
      return `0${min}`;
    }
    return min;
  };
  return `${hours()}:${minutes()}`;
};

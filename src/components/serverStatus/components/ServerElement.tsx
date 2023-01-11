export const ServerElement = (props: any) => {
  const { data } = props;

  const parseTime = () => {
    const date = new Date(data[1].QueryTimestamp);
    const hours = () => {
      const hrs = date.getHours();
      if (hrs < 10) {
        return '0' + hrs;
      } else {
        return hrs;
      }
    };
    const minutes = () => {
      const min = date.getMinutes();
      if (min < 10) {
        return '0' + min;
      } else {
        return min;
      }
    };
    const seconds = () => {
      const sec = date.getSeconds();
      if (sec < 10) {
        return '0' + sec;
      } else {
        return sec;
      }
    };
    return `Query Timestamp: ${hours()}:${minutes()}:${seconds()}`;
  };

  return (
    <div className='serverElement'>
      <p>{data[0]}</p>
      <div>
        <p>Status: {data[1].Status}</p>
        <p>Ping: {data[1].ResponseTime}</p>
        <p> {parseTime()}</p>
      </div>
    </div>
  );
};

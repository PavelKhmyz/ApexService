export const ServerElement = (props: any) => {
  const { data } = props;

  return (
    <div className='serverElement'>
      <p>{data[0]}</p>
      <div>
        <p>Status: {data[1].Status}</p>
        {data[1].Status !== 'DOWN' && data[1].ResponseTime && (
          <p>Ping: {data[1].ResponseTime}</p>
        )}
      </div>
    </div>
  );
};

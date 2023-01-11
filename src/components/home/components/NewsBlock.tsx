export const NewsBlock = (props: any) => {
  const { newsEl } = props;
  const news = newsEl[1];
  return (
    <div className='newsBlock'>
      <div className='newsBlockWrapper'>
        <img className='newsBlockImg' src={news.img} />
        <div className='newsBlockContent'>
          <p>{news.short_desc}</p>
          <a>Read more...</a>
        </div>
      </div>
      <div className='newsBlockTitle'>
        <p>{news.title}</p>
      </div>
    </div>
  );
};

// style={{ backgroundImage: `url(${news.img})` }}

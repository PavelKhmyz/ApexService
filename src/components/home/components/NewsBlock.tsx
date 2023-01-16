export const NewsBlock = (props: any) => {
  const { newsEl } = props;
  const news = newsEl[1];
  return (
    <a className='newsBlock' href={news.link} target='_blank'>
      <div className='newsBlockWrapper'>
        <img className='newsBlockImg' src={news.img} />
        <div className='newsBlockContent'>
          <p>{news.short_desc}</p>
          <span className='newsBlockLink'>Read more...</span>
        </div>
      </div>
      <div className='newsBlockTitle'>
        <p>{news.title}</p>
      </div>
    </a>
  );
};

// style={{ backgroundImage: `url(${news.img})` }}

export const NewsBlock = (props: any) => {
  const { newsEl } = props;
  return (
    <a className='newsBlock' href={newsEl.link} target='_blank'>
      <div className='newsBlockWrapper'>
        <img className='newsBlockImg' src={newsEl.img} />
        <div className='newsBlockContent'>
          <p>{newsEl.short_desc}</p>
          <span className='newsBlockLink'>Read more...</span>
        </div>
      </div>
      <div className='newsBlockTitle'>
        <p>{newsEl.title}</p>
      </div>
    </a>
  );
};

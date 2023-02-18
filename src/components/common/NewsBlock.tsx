import { NewsResponseType } from '../../redux/initialStates/Types/newsInitialStateType';

interface NewsBlockProps {
  newsEl: NewsResponseType;
}

export const NewsBlock = ({ newsEl }: NewsBlockProps) => (
  <a className='newsBlock' href={newsEl.link} target='_blank' rel='noreferrer'>
    <div className='newsBlockWrapper'>
      <img className='newsBlockImg' src={newsEl.img} alt='News asset' />
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

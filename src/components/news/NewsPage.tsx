import { useAppSelector } from '../../redux/hooks/hook';
import { NewsResponseType } from '../../redux/initialStates/Types/newsInitialStateType';
import { NewsBlock } from '../home/components/NewsFeed/NewsBlock';
import './newsPage.css';

export const NewsPage = () => {
  const news = useAppSelector((state) => state.news.newsData);
  return (
    <div className='newsPage'>
      {news &&
        news.map((newsEl: NewsResponseType) => (
          <NewsBlock key={newsEl.title} newsEl={newsEl} />
        ))}
    </div>
  );
};

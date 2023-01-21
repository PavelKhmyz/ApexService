import { useAppSelector } from '../../redux/hooks/hook';
import { NewsBlock } from '../home/components/NewsFeed/NewsBlock';
import './newsPage.css';

export const NewsPage = () => {
  const news = useAppSelector((state) => state.news.newsData);
  return (
    <div className='newsPage'>
      {news &&
        news.map((newsEl: any) => (
          <NewsBlock key={newsEl.title} newsEl={newsEl} />
        ))}
    </div>
  );
};

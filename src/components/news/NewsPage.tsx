import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppSelector } from '../../redux/hooks/hook';
import { NewsBlock } from '../home/components/NewsBlock';
import './newsPage.css';

export const NewsPage = () => {
  const news = useAppSelector((state) => state.news.newsData);
  return (
    <div className='newsPage'>
      {news.map((newsEl: any) => (
        <NewsBlock key={newsEl[0]} newsEl={newsEl} />
      ))}
    </div>
  );
};

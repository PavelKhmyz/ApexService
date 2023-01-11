import { useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { getNews } from '../../redux/reducer/newsSlice';
import { NewsBlock } from './components/NewsBlock';
import './homeStyle.css';

export const Home = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.newsData);

  useEffect(() => {
    if (!news) {
      dispatch(getNews());
    }
  }, []);

  return (
    <div className='homeContainer'>
      {news ? (
        news.map((newsEl: any) => <NewsBlock key={newsEl[0]} newsEl={newsEl} />)
      ) : (
        <PropagateLoader />
      )}
    </div>
  );
};

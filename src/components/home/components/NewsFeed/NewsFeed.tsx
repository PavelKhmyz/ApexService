import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { NewsResponseType } from '../../../../redux/initialStates/Types/newsInitialStateType';
import { getNews } from '../../../../redux/reducer/newsSlice';
import { responsive } from '../../reactCarouselResponsive';
import { NewsBlock } from './NewsBlock';

export const NewsFeed = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.newsData);

  useEffect(() => {
    if (!news) {
      dispatch(getNews());
    }
  }, []);

  return (
    <div className='newsFeed'>
      <NavLink to={'/news'}>News feed</NavLink>
      {news ? (
        <Carousel
          partialVisible={true}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
        >
          {news.map((newsEl: NewsResponseType) => (
            <NewsBlock key={newsEl.title} newsEl={newsEl} />
          ))}
        </Carousel>
      ) : (
        <PropagateLoader />
      )}
    </div>
  );
};

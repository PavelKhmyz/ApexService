import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { NewsResponseType } from '../../../../redux/initialStates/Types/newsInitialStateType';
import { fetchNews } from '../../../../redux/reducer/newsSlice';
import { responsive } from './reactCarouselResponsive';
import { NewsBlock } from '../../../common/NewsBlock';
import './newsFeedStyle.scss';

export const NewsFeed = () => {
  const dispatch = useAppDispatch();
  const { newsData, loadingNews } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (!newsData) {
      dispatch(fetchNews());
    }
  }, [dispatch, newsData]);

  return (
    <div className='newsFeed'>
      <NavLink className='newsLink' to={'/news'}>
        News feed
      </NavLink>
      <PropagateLoader loading={loadingNews} />
      {newsData && (
        <Carousel partialVisible responsive={responsive} autoPlay infinite>
          {newsData.map((newsEl: NewsResponseType) => (
            <NewsBlock key={newsEl.title} newsEl={newsEl} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

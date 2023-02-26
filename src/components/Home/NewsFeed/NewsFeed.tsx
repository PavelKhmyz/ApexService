import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import { NewsResponseType } from '../../NewsPage/NewsPage.type';
import { fetchNews } from '../../NewsPage/NewsPage.slice';
import { NewsBlock } from '../../common/NewsBlock';
import './NewsFeed.style.scss';
import { newsFeedCarouselResponsive } from './NewsFeed.constants';

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
        <Carousel
          partialVisible
          responsive={newsFeedCarouselResponsive}
          autoPlay
          infinite
          draggable={false}
        >
          {newsData.map((newsEl: NewsResponseType) => (
            <NewsBlock key={newsEl.title} newsEl={newsEl} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

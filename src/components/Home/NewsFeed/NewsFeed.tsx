import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import { NewsResponseType } from '../../../redux/initialStates/Types/newsInitialStateType';
import { fetchNews } from '../../../redux/reducer/newsSlice';
import { NewsBlock } from '../../common/NewsBlock';
import './NewsFeed.style.scss';

const newsFeedCarouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
    partialVisibilityGutter: -1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: -1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 520 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: -1,
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1,
    slidesToSlide: 0,
    partialVisibilityGutter: -1,
  },
};

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
        <Carousel partialVisible responsive={newsFeedCarouselResponsive} autoPlay infinite>
          {newsData.map((newsEl: NewsResponseType) => (
            <NewsBlock key={newsEl.title} newsEl={newsEl} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

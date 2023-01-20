import { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { getNews } from '../../redux/reducer/newsSlice';
import { NewsBlock } from './components/NewsBlock';
import Carousel from 'react-multi-carousel';
import ReactPlayer from 'react-player/youtube';
import 'react-multi-carousel/lib/styles.css';
import './homeStyle.css';
import { StatsInput } from './components/StatsInput';
import { NavLink } from 'react-router-dom';
import { getPredators } from '../../redux/reducer/predatorsSlice';
import { PredatorsComponent } from '../predatorsComponent/PredatorsComponent';
import { getCraftItems } from '../../redux/reducer/craftSlice';
import { CraftComponent } from '../craft/CraftComponent';
import { PlayerStats } from './components/PlayerStats';

export const Home = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.newsData);
  const predators = useAppSelector((state) => state.predators.predators);
  const craft = useAppSelector((state) => state.craft.items);
  const playerStats = useAppSelector((state) => state.playerStats.playerStats);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: -1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: -1,
    },
  };

  const [bla, setBla] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBla(true);
    }, 1000);
  }, [bla]);

  useEffect(() => {
    if (!news) {
      dispatch(getNews());
    }
  }, []);

  useEffect(() => {
    if (!predators) {
      setTimeout(() => {
        dispatch(getPredators());
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (!craft) {
      setTimeout(() => {
        dispatch(getCraftItems());
      }, 4000);
    }
  }, []);

  return (
    <div className='homeContainer'>
      <div className='videoContainer'>
        <ReactPlayer
          url=''
          // https://www.youtube.com/watch?v=VldQc7Y_4H8
          width={'96.5vw'}
          height={'54.8vw'}
          loop={true}
          muted={true}
          playing={true}
        />
        <div
          className='player'
          style={!bla ? { backgroundColor: 'black' } : {}}
        >
          <StatsInput />
        </div>
      </div>
      {playerStats && <PlayerStats data={playerStats} />}
      <div className='newsFeed'>
        <NavLink to={'/news'}>News feed</NavLink>
        {news ? (
          <Carousel
            partialVisible={true}
            responsive={responsive}
            autoPlay={true}
            infinite={true}
          >
            {news.map((newsEl: any) => (
              <NewsBlock key={newsEl.title} newsEl={newsEl} />
            ))}
          </Carousel>
        ) : (
          <PropagateLoader />
        )}
      </div>
      <div className='craftAndPredatorsWrapper'>
        {predators ? (
          <>
            <PredatorsComponent title='Battle Royal' data={predators.RP} />
            <PredatorsComponent title='Arenas' data={predators.AP} />
          </>
        ) : (
          <PropagateLoader />
        )}
        {craft ? <CraftComponent data={craft} /> : <PropagateLoader />}
      </div>
    </div>
  );
};

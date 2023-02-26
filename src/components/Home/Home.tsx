import { PropagateLoader } from 'react-spinners';
import { useAppSelector } from '../../redux/hooks/hook';
import 'react-multi-carousel/lib/styles.css';
import './Home.style.scss';
import { NewsFeed } from './NewsFeed/NewsFeed';
import { PredatorsAndCraftBlock } from './PredatorsAndCraftBlock/PredatorsAndCraftBlock';
import { TitleComponent } from './Title/TitleComponent';
import { PlayerStats } from '../common/PlayerStats/PlayerStats';
import { ErrorComponent } from '../common/ErrorComponent';

export const Home = () => {
  const { playerStats, loadingStats, error } = useAppSelector((state) => state.playerStats);

  return (
    <div className='homeContainer'>
      <TitleComponent />
      <div className='homeContent'>
        {error && <ErrorComponent message={error} />}
        {playerStats && <PlayerStats data={playerStats} />}
        <PropagateLoader color='white' loading={loadingStats} />
        <NewsFeed />
        <PredatorsAndCraftBlock />
      </div>
    </div>
  );
};

import { PropagateLoader } from 'react-spinners';
import { useAppSelector } from '../../redux/hooks/hook';
import 'react-multi-carousel/lib/styles.css';
import './homeStyle.scss';
import { NewsFeed } from './components/NewsFeed/NewsFeed';
import { PredatorsAndCraftBlock } from './components/PredatorsAndCraftBlock/PredatorsAndCraftBlock';
import { TitleComponent } from './components/Title/TitleComponent';
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

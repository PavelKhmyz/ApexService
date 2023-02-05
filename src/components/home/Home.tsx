import { PropagateLoader } from 'react-spinners';
import { useAppSelector } from '../../redux/hooks/hook';
import 'react-multi-carousel/lib/styles.css';
import './homeStyle.scss';
import { NewsFeed } from './components/NewsFeed/NewsFeed';
import { PredatorsAndCraftBlock } from './components/PredatorsAndCraftBlock/PredatorsAndCraftBlock';
import { TitleComponent } from './components/Title/TitleComponent';
import { PlayerStats } from './components/PlayerStats/PlayerStats';
import { ErrorComponent } from './components/ErrorComponent';

export const Home = () => {
  const playerStats = useAppSelector((state) => state.playerStats.playerStats);
  const badRequest = useAppSelector((state) => state.playerStats.badRequest);
  const loading = useAppSelector((state) => state.playerStats.loadingStats);
  const error = useAppSelector((state) => state.playerStats.error);

  return (
    <div className='homeContainer'>
      <TitleComponent />
      <div className='homeContent'>
        {error && <ErrorComponent data={error} />}
        {badRequest && <ErrorComponent data={badRequest} />}
        {playerStats && <PlayerStats data={playerStats} />}
        <PropagateLoader loading={loading} />
        <NewsFeed />
        <PredatorsAndCraftBlock />
      </div>
    </div>
  );
};

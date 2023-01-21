import { useAppSelector } from '../../redux/hooks/hook';
import 'react-multi-carousel/lib/styles.css';
import './homeStyle.css';
import { NewsFeed } from './components/NewsFeed/NewsFeed';
import { PredatorsAndCraftBlock } from './components/PredatorsAndCraftBlock/PredatorsAndCraftBlock';
import { TitleComponent } from './components/Title/TitleComponent';
import { PlayerStats } from './components/PlayerStats/PlayerStats';

export const Home = () => {
  const playerStats = useAppSelector((state) => state.playerStats.playerStats);

  return (
    <div className='homeContainer'>
      <TitleComponent />
      {playerStats && <PlayerStats data={playerStats} />}
      <NewsFeed />
      <PredatorsAndCraftBlock />
    </div>
  );
};

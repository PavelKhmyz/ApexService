import ReactPlayer from 'react-player';
import { StatsInput } from './components/StatsInput';
import './titleComponent.style.scss';

export const TitleComponent = () => (
  <div className='videoContainer'>
    <ReactPlayer
      url='https://www.youtube.com/watch?v=VldQc7Y_4H8'
      width={'100%'}
      height={'100%'}
      loop
      muted
      playing
    />
    <div className='player'>
      <StatsInput />
    </div>
  </div>
);

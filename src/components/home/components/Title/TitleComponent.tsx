import ReactPlayer from 'react-player';
import { StatsInput } from './StatsInput';

export const TitleComponent = () => {
  return (
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
      <div className='player'>
        <StatsInput />
      </div>
    </div>
  );
};

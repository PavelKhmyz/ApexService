import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { StatsInput } from './StatsInput';

export const TitleComponent = () => {
  return (
    <div className='videoContainer'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=VldQc7Y_4H8'
        width={'100%'}
        height={'100%'}
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

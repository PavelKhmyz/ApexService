import Carousel from 'react-multi-carousel';
import { PredatorComponentProps } from '../../homeTypes';
import { predatorResponsive } from './components/predatorCarouselResponsive';
import { PredatorsInner } from './components/PredatorsInner';

export const PredatorsComponent = ({ title, data }: PredatorComponentProps) => {
  const { PC, PS4, X1 } = data;

  return (
    <div className='predatorsBR'>
      <p className='predatorsTitle'>{title}</p>
      <Carousel partialVisible responsive={predatorResponsive} autoPlay infinite arrows={false}>
        <PredatorsInner title='PC' data={PC} />
        <PredatorsInner title='Play Station' data={PS4} />
        <PredatorsInner title='Xbox' data={X1} />
      </Carousel>
    </div>
  );
};

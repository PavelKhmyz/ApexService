import Carousel from 'react-multi-carousel';
import { RP } from './PredatorsComponent.type';
import { PredatorsInner } from './components/PredatorsInner';
import { predatorCarouselResponsive } from './PredatorsComponent.constants';

interface PredatorComponentProps {
  title: string;
  data: RP;
}

export const PredatorsComponent = ({ title, data }: PredatorComponentProps) => {
  const { PC, PS4, X1 } = data;

  return (
    <div className='predatorsBR'>
      <p className='predatorsTitle'>{title}</p>
      <Carousel
        partialVisible
        responsive={predatorCarouselResponsive}
        autoPlay
        infinite
        arrows={false}
        draggable={false}
      >
        <PredatorsInner title='PC' data={PC} />
        <PredatorsInner title='Play Station' data={PS4} />
        <PredatorsInner title='Xbox' data={X1} />
      </Carousel>
    </div>
  );
};

import Carousel from 'react-multi-carousel';
import { RP } from '../../../../../redux/initialStates/Types/predatorsInitialStateType';
import { predatorResponsive } from './predatorCarouselResponsive';
import { PredatorsInner } from './PredatorsInner';
import './PredatorsStyle.scss';

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
        partialVisible={true}
        responsive={predatorResponsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
      >
        <PredatorsInner title='PC' data={PC} />
        <PredatorsInner title='Play Station' data={PS4} />
        <PredatorsInner title='Xbox' data={X1} />
      </Carousel>
    </div>
  );
};

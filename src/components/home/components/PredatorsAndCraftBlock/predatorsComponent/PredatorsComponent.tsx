import Carousel from 'react-multi-carousel';
import { RP } from '../../../../../redux/initialStates/Types/predatorsInitialStateType';
import { predatorResponsive } from './predatorCarouselResponsive';
import './PredatorsStyle.css';

interface PredatorComponentProps {
  title: string;
  data: RP;
}

export const PredatorsComponent = ({ title, data }: PredatorComponentProps) => {
  const { PC, PS4, X1 } = data;

  return (
    <div className='predatorsBR'>
      <h1>{title}</h1>
      <Carousel
        partialVisible={true}
        responsive={predatorResponsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
      >
        <div>
          <h2>PC</h2>
          <p>Place: {PC.foundRank}</p>
          <p>Predator Cutoff: {PC.val}</p>
          <p>Total Masters and Preds: {PC.totalMastersAndPreds}</p>
        </div>
        <div>
          <h2>Play Station</h2>
          <p>Place: {PS4.foundRank}</p>
          <p>Predator Cutoff: {PS4.val} </p>
          <p>Total Masters and Preds: {PS4.totalMastersAndPreds}</p>
        </div>
        <div>
          <h2>Xbox</h2>
          <p>Place: {X1.foundRank}</p>
          <p>Predator Cutoff: {X1.val}</p>
          <p>Total Masters and Preds: {X1.totalMastersAndPreds}</p>
        </div>
      </Carousel>
    </div>
  );
};

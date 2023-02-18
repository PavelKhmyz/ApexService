import { PlatformData } from '../../../../../../redux/initialStates/Types/predatorsInitialStateType';

export interface PredatorInnerProps {
  data: PlatformData;
  title: string;
}

export const PredatorsInner = ({ data, title }: PredatorInnerProps) => (
  <div>
    <p className='predatorsInnerTitle'>{title}</p>
    <p className='predatorsInnerContent'>Place: {data.foundRank}</p>
    <p className='predatorsInnerContent'>Predator Cutoff: {data.val}</p>
    <p className='predatorsInnerContent'>Total Masters and Preds: {data.totalMastersAndPreds}</p>
  </div>
);

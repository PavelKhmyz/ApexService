import { PredatorInnerProps } from '../../../homeTypes';

export const PredatorsInner = ({ data, title }: PredatorInnerProps) => (
  <div>
    <p className='predatorsInnerTitle'>{title}</p>
    <p className='predatorsInnerContent'>Place: {data.foundRank}</p>
    <p className='predatorsInnerContent'>Predator Cutoff: {data.val}</p>
    <p className='predatorsInnerContent'>
      Total Masters and Preds: {data.totalMastersAndPreds}
    </p>
  </div>
);
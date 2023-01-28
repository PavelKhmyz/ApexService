import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { getCraftItems } from '../../../../redux/reducer/craftSlice';
import { getPredators } from '../../../../redux/reducer/predatorsSlice';
import { CraftComponent } from './craft/CraftComponent';
import { PredatorsComponent } from './predatorsComponent/PredatorsComponent';

export const PredatorsAndCraftBlock = () => {
  const dispatch = useAppDispatch();
  const predators = useAppSelector((state) => state.predators.predators);
  const craft = useAppSelector((state) => state.craft.items);

  useEffect(() => {
    if (!predators) {
      setTimeout(() => {
        dispatch(getPredators());
      }, 2000);
    }
  }, [dispatch, predators]);

  useEffect(() => {
    if (!craft) {
      setTimeout(() => {
        dispatch(getCraftItems());
      }, 4000);
    }
  }, [craft, dispatch]);
  return (
    <div className='craftAndPredatorsWrapper'>
      <p className='craftAndPredatorsTitle'>Predators cutoff</p>
      <div className='craftAndPredatorsContent'>
        {predators ? (
          <>
            <PredatorsComponent title='Battle Royal' data={predators.RP} />
            <PredatorsComponent title='Arenas' data={predators.AP} />
          </>
        ) : (
          <PropagateLoader />
        )}
        {craft ? <CraftComponent data={craft} /> : <PropagateLoader />}
      </div>
    </div>
  );
};

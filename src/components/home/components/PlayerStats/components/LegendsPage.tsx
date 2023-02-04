import { useEffect } from 'react';
import { SelectedLegend } from './SelectedLegend';
import './legendsPageStyle.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hooks/hook';
import { Legends } from '../../../../../redux/initialStates/Types/playerStatsStateType';
import {
  changeSearchValue,
  setNewLegend,
} from '../../../../../redux/reducer/playerStatsSlice';
import { SelectElement } from '../../../../common/select/SelectElement';

interface LegendsPageProps {
  data: Legends;
}

export const LegendsPage = ({ data }: LegendsPageProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.playerStats.searchValue);
  const newLegend = useAppSelector((state) => state.playerStats.newLegend);
  const { all } = data;
  const selectKeys = Object.keys(data.all);

  useEffect(() => {
    dispatch(changeSearchValue(data.selected.LegendName));
  }, [data.selected.LegendName, dispatch]);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(changeSearchValue(event.target.value));
  };

  const searchLegend = () => {
    const searchingLegend = all[searchValue];
    dispatch(setNewLegend(searchingLegend));
  };

  return (
    <div className='legendWrapper'>
      <div className='legendsSearch'>
        <SelectElement
          title={'Legend Name:'}
          value={searchValue}
          optionsArray={selectKeys}
          handleChange={handleChangeInputValue}
        />
        <button className='searchButton' type='button' onClick={searchLegend}>
          Show
        </button>
      </div>
      <div className='legendContentWrapper'>
        {!newLegend ? (
          <SelectedLegend data={data.selected} />
        ) : (
          <SelectedLegend data={newLegend} />
        )}
      </div>
    </div>
  );
};

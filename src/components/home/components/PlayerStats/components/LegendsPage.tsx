import { useEffect } from 'react';
import { SelectedLegend } from './SelectedLegend';
import './legendsPageStyle.scss';
import { SelectOption } from './SelectOption';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../redux/hooks/hook';
import { Legends } from '../../../../../redux/initialStates/Types/playerStatsStateType';
import {
  changeSearchValue,
  setNewLegend,
} from '../../../../../redux/reducer/playerStatsSlice';

interface LegendsPageProps {
  data: Legends;
}

export const LegendsPage = ({ data }: LegendsPageProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.playerStats.searchValue);
  const newLegend = useAppSelector((state) => state.playerStats.newLegend);
  const allLegends = Object.entries(data.all);
  const selectKeys = Object.keys(data.all);

  useEffect(() => {
    dispatch(changeSearchValue(data.selected.LegendName));
  }, [data.selected.LegendName, dispatch]);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(changeSearchValue(event.target.value));
  };

  const searchLegend = (name: string) => {
    const searchingLegend = allLegends.filter((el) => el[0] === name);
    const [bla] = searchingLegend;
    dispatch(setNewLegend({ ...bla[1], LegendName: bla[0] }));
  };

  return (
    <div className='legendWrapper'>
      <div className='legendsSearch'>
        <label htmlFor='selectId' className='inputLabel'>
          <span>Legend Name:</span>
          <select
            onChange={(event) => handleChangeInputValue(event)}
            value={searchValue}
            id='selectId'
          >
            {selectKeys.map((key) => (
              <SelectOption key={key} data={key} />
            ))}
          </select>
        </label>
        <button
          className='searchButton'
          type='button'
          onClick={() => searchLegend(searchValue)}
        >
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

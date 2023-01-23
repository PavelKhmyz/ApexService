import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import { Legends } from '../../../../redux/initialStates/Types/playerStatsStateType';
import {
  changeSearchValue,
  setNewLegend,
} from '../../../../redux/reducer/playerStatsSlice';
import { Input } from '../../../common/Input';
import './playerStatsStyle.css';
import { SelectedLegend } from './SelectedLegend';

interface LegendsPageProps {
  data: Legends;
}

export const LegendsPage = ({ data }: LegendsPageProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.playerStats.searchValue);
  const newLegend = useAppSelector((state) => state.playerStats.newLegend);
  const allLegends = Object.entries(data.all);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
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
      <div>
        <Input
          text='Legend Name:'
          type='text'
          placeholder='Enter Legend Name'
          value={searchValue}
          onChangeFunc={(event) => handleChangeInputValue(event)}
        />
        <button type='button' onClick={() => searchLegend(searchValue)}>
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

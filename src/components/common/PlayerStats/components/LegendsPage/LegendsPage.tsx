import { useEffect, useState } from 'react';
import { SelectedLegend } from './components/SelectedLegend';
import './legendsPageStyle.scss';
import { useAppDispatch } from '../../../../../redux/hooks/hook';
import { SelectElement } from '../../../select/SelectElement';
import { Legend, Legends } from '../../../../../redux/initialStates/Types/playerStatsStateType';

export interface LegendsPageProps {
  data: Legends;
}

export const LegendsPage = ({ data }: LegendsPageProps) => {
  const dispatch = useAppDispatch();
  const [newLegend, setNewLegend] = useState<null | Legend>(null);
  const [searchValue, setSearchValue] = useState(data.selected.LegendName);
  const { all } = data;
  const selectKeys = Object.keys(all);

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setNewLegend(all[searchValue]);
  }, [all, dispatch, searchValue]);

  return (
    <div className='legendWrapper'>
      <div className='legendsSearch'>
        <SelectElement
          title={'Legend Name:'}
          value={searchValue}
          optionsArray={selectKeys}
          handleChange={handleChangeInputValue}
        />
      </div>
      <div className='legendContentWrapper'>
        {!newLegend ? <SelectedLegend data={data.selected} /> : <SelectedLegend data={newLegend} />}
      </div>
    </div>
  );
};

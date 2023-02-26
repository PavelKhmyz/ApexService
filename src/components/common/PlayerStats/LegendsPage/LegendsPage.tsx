import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { Legends, Legend } from '../PlayerStats.type';
import { SelectElement } from '../../Select/SelectElement';
import { SelectedLegend } from './components/SelectedLegend';
import './LegendsPage.style.scss';

export interface LegendsPageProps {
  data: Legends;
}

export const LegendsPage = ({ data }: LegendsPageProps) => {
  const dispatch = useAppDispatch();
  const [newLegend, setNewLegend] = useState<null | Legend>(null);
  const [searchValue, setSearchValue] = useState(data.selected.LegendName);
  const { all: allLegends } = data;
  const selectKeys = Object.keys(allLegends);

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setNewLegend(allLegends[searchValue]);
  }, [allLegends, dispatch, searchValue]);

  return (
    <div className='legendWrapper'>
      <div className='legendsSearch'>
        <SelectElement
          title={'Legend Name:'}
          value={searchValue}
          optionsArray={selectKeys}
          onChange={handleChangeInputValue}
        />
      </div>
      <div className='legendContentWrapper'>
        {!newLegend ? <SelectedLegend data={data.selected} /> : <SelectedLegend data={newLegend} />}
      </div>
    </div>
  );
};

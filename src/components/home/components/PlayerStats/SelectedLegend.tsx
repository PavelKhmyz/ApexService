import {
  Datum,
  Legend,
  Selected,
} from '../../../../redux/initialStates/Types/playerStatsStateType';
import { StatsValue } from './StatsValue';

export interface SelectedLegendProps {
  data: Legend | Selected;
}

export const SelectedLegend = ({ data }: SelectedLegendProps) => {
  return (
    <>
      <div className='legendInner'>
        <p style={{ fontSize: '50px', margin: 0 }}>{data.LegendName}</p>
        <img className='legendAsset' src={data.ImgAssets.icon} />
      </div>
      <div className='legendInner'>
        {data.data &&
          data.data.map((data: Datum) => (
            <StatsValue key={data.value} data={data} />
          ))}
      </div>
    </>
  );
};

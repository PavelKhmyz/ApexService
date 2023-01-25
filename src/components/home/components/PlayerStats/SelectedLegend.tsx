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
      <div
        className='legendInner'
        // style={{ backgroundImage: `url(${data.ImgAssets.icon})` }}
      >
        <img className='legendAsset' src={data.ImgAssets.icon} />
      </div>
      <div className='legendInner'>
        <p className='legendName'>{data.LegendName}</p>
        {data.data &&
          data.data.map((data: Datum) => (
            <StatsValue key={data.value} data={data} />
          ))}
      </div>
    </>
  );
};

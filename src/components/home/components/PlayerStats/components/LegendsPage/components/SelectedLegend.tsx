import { Datum } from '../../../../../../../redux/initialStates/Types/playerStatsStateType';
import { SelectedLegendProps } from '../../../../homeTypes';
import { StatsValue } from '../../common/StatsValue';

export const SelectedLegend = ({ data }: SelectedLegendProps) => (
  <>
    <div className='legendInner'>
      <img
        className='legendAsset'
        src={data.ImgAssets.icon}
        alt='legend asset'
      />
    </div>
    <div className='legendInner'>
      <p className='legendName'>{data.LegendName}</p>
      {data.data ? (
        data.data.map((legend: Datum) => (
          <StatsValue key={legend.value} statsData={legend} />
        ))
      ) : (
        <span className='sorryMessage'>
          Sorry, but we haven`t data about this Legend
        </span>
      )}
    </div>
  </>
);

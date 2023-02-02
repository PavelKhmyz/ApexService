import {
  Datum,
  PlayerStatsResponseType,
} from '../../../../../redux/initialStates/Types/playerStatsStateType';
import { PcLogo } from '../../../../common/radioBlock/PcLogo';
import { RankComponent } from './RankComponent';
import { StatsValue } from './StatsValue';
import './playerStatsPageStyle.scss';
import { XboxLogo } from '../../../../common/radioBlock/XboxLogo';
import { PsLogo } from '../../../../common/radioBlock/PsLogo';

interface PlayerStatsPageProps {
  data: PlayerStatsResponseType;
}

export const PlayerStatsPage = ({ data }: PlayerStatsPageProps) => {
  const { realtime, total, global } = data;
  const valuesArray: Datum[] = Object.values(total);

  const platform = () => {
    if (global.platform === 'X1') {
      return <XboxLogo />;
    }
    if (global.platform === 'PS4') {
      return <PsLogo />;
    }
    return <PcLogo />;
  };

  return (
    <div className='statsWrapper'>
      <div className='statsWrapperTitle'>
        <p className='playerName'>{global.name}</p>
        <div className='playerPlatform'>{platform()}</div>
        <div>
          <p>Level: {global.level}</p>
          <div className='percentsBorder'>
            <div
              className='percentsBar'
              style={{ width: `${global.toNextLevelPercent}%` }}
            />
          </div>
        </div>
        <p>{realtime.currentStateAsText}</p>
      </div>
      <div className='statsWrapperContent'>
        <div className='statsInner'>
          {valuesArray.map((statsData: Datum) => (
            <StatsValue key={statsData.value} statsData={statsData} />
          ))}
        </div>
        <div className='statsInner2'>
          <RankComponent name='Battle Royal' data={global.rank} />
          <RankComponent name='Arena' data={global.arena} />
        </div>
      </div>
    </div>
  );
};

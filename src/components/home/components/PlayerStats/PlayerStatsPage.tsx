import { useAppSelector } from '../../../../redux/hooks/hook';
import { PcLogo } from '../Title/PcLogo';
import { PsLogo } from '../Title/PsLogo';
import { XboxLogo } from '../Title/XboxLogo';
import { RankComponent } from './RankComponent';
import { StatsValue } from './StatsValue';

export const PlayerStatsPage = () => {
  const playerStats = useAppSelector((state) => state.playerStats.playerStats);
  const { realtime, total, global } = playerStats;
  const valuesArray = Object.values(total);

  const platform = () => {
    if (global.platform === 'X1') {
      return <XboxLogo />;
    } else if (global.platform === 'PS4') {
      return <PsLogo />;
    } else {
      return <PcLogo />;
    }
  };

  return (
    <>
      <div className='statsWrapper'>
        <div className='statsInner'>
          <div className='playerStatsContent'>
            <p className='bla'>{global.name}</p>
            <div className='playerPlatform'>{platform()}</div>
            <div>
              <p className='bla'>Level: {global.level}</p>
              <div className='percentsBorder'>
                <div
                  className='percentsBar'
                  style={{ width: `${global.toNextLevelPercent}%` }}
                ></div>
              </div>
            </div>
            <p className='bla'>{realtime.currentStateAsText}</p>
          </div>
          {valuesArray.map((data: any) => (
            <StatsValue key={data.value} data={data} />
          ))}
        </div>
        <div className='statsInner2'>
          <RankComponent name='Battle Royal' data={global.rank} />
          <RankComponent name='Arena' data={global.arena} />
        </div>
      </div>
    </>
  );
};

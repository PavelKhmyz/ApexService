import { LegendStats } from './LegendStats';
import './playerStatsStyle.css';

export interface PlayerStatsResponseType {
  global: any;
  realtime: any;
  legends: any;
  mozambiquehere_internal: any;
  ALS: any;
  total: any;
}

interface PlayerStatsProps {
  data: PlayerStatsResponseType;
}

export const PlayerStats = ({ data }: PlayerStatsProps) => {
  const { global, legends } = data;
  console.log(data);
  return (
    <div
      className='playerStatsWrapper'
      style={{ backgroundImage: `url(${legends.selected.ImgAssets.banner})` }}
    >
      <h1>{global.name}</h1>
      <p>{global.level}</p>
      <img src={legends.selected.ImgAssets.icon} />
      <div>
        {legends.selected.data.map((data: any) => (
          <LegendStats key={data.key} data={data} />
        ))}
      </div>
    </div>
  );
};

import { useAppSelector } from '../../../../redux/hooks/hook';
import './playerStatsStyle.css';

export const LegendsPage = () => {
  const playerStats = useAppSelector((state) => state.playerStats.playerStats);
  const { legends } = playerStats;
  return (
    <>
      <div className='legendInner'>
        <img className='legendAsset' src={legends.selected.ImgAssets.icon} />
        <p>{legends.selected.LegendName}</p>
      </div>
      <div></div>
    </>
  );
};

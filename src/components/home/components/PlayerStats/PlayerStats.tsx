import './playerStatsStyle.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PlayerStatsPage } from './PlayerStatsPage';
import { LegendsPage } from './LegendsPage';

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
  const { legends } = data;
  console.log(data);
  return (
    <div
      className='playerStatsWrapper'
      style={{ backgroundImage: `url(${legends.selected.ImgAssets.banner})` }}
    >
      <Tabs className={'tabsWrapper'}>
        <TabList className={'tabsTitle'}>
          <Tab className={'tab'} selectedClassName={'tabSelected'}>
            Total Statistic
          </Tab>
          <Tab className={'tab'} selectedClassName={'tabSelected'}>
            Legends
          </Tab>
        </TabList>

        <TabPanel className={'tabContent'}>
          <PlayerStatsPage />
        </TabPanel>
        <TabPanel className={'tabContent'}>
          <LegendsPage />
        </TabPanel>
      </Tabs>
    </div>
  );
};

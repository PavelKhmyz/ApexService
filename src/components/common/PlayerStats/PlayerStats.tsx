import './playerStatsStyle.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PlayerStatsPage, PlayerStatsProps } from './components/PlayerStatsPage/PlayerStatsPage';
import { LegendsPage } from './components/LegendsPage/LegendsPage';

export const PlayerStats = ({ data }: PlayerStatsProps) => {
  const { legends } = data;
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
          <PlayerStatsPage data={data} />
        </TabPanel>
        <TabPanel className={'tabContent'}>
          <LegendsPage data={legends} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

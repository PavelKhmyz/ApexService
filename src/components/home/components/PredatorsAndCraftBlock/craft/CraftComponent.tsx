import { CraftResponseType } from '../../../../../redux/initialStates/Types/craftInitialStateTypes';
import { CraftElement } from './CraftElement';
import './craftStyle.scss';

interface CraftComponentPropsType {
  data: [CraftResponseType];
}

export const CraftComponent = ({ data }: CraftComponentPropsType) => {
  const filteredData = data.filter(
    (element) =>
      element.bundle !== 'health_pickup' &&
      element.bundle !== 'shield_pickup' &&
      element.bundle !== 'ammo' &&
      element.bundle !== 'evo' &&
      element.bundle !== 'weapon_one' &&
      element.bundle !== 'weapon_two'
  );
  const weaponOne = data.filter((element) => element.bundle === 'weapon_one');
  const weaponTwo = data.filter((element) => element.bundle === 'weapon_two');

  const concatWeapons = weaponOne[0].bundleContent.concat(
    weaponTwo[0].bundleContent
  );

  const weapons = {
    ...weaponOne[0],
    bundle: 'weapons',
    bundleContent: concatWeapons,
  };

  filteredData.push(weapons);
  return (
    <div className='craftWrapper'>
      <p className='craftTitle'>Craft Rotation</p>
      {filteredData.map((el) => (
        <CraftElement key={el.bundle} craftElement={el} />
      ))}
    </div>
  );
};

import { CraftElement } from './CraftElement';
import './craftStyle.css';

export interface ItemType {
  name: string;
  rarity: string;
  asset: string;
  rarityHex: string;
}

export interface BundleContent {
  item: string;
  cost: number;
  itemType: ItemType;
}

export interface CraftDataObject {
  bundle: string;
  start: number;
  end: number;
  startDate: string;
  endDate: string;
  bundleType: string;
  bundleContent: BundleContent[];
}

interface CraftComponentPropsType {
  data: [CraftDataObject];
}

export const CraftComponent = (props: CraftComponentPropsType) => {
  const { data } = props;
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
      <h1>Craft Rotation</h1>
      {filteredData.map((el) => (
        <CraftElement key={el.bundle} craftElement={el} />
      ))}
    </div>
  );
};

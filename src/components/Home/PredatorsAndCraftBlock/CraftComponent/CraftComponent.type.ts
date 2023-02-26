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

export interface CraftResponseType {
  bundle: string;
  start: number;
  end: number;
  startDate: string;
  endDate: string;
  bundleType: string;
  bundleContent: BundleContent[];
}

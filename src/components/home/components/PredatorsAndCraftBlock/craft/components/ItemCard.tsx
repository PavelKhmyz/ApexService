import { BundleContent } from '../../../../../../redux/initialStates/Types/craftInitialStateTypes';

export interface ItemCardProps {
  card: BundleContent;
}

export const ItemCard = ({ card }: ItemCardProps) => (
  <img className='itemCardImg' src={card.itemType.asset} alt='Craft item' />
);

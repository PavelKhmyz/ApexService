import { BundleContent } from '../../../../../redux/initialStates/Types/craftInitialStateTypes';

interface ItemCardProps {
  card: BundleContent;
}

export const ItemCard = ({ card }: ItemCardProps) => {
  return <img className='itemCardImg' src={card.itemType.asset} />;
};

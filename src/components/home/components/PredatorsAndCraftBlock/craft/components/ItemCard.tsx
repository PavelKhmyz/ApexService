import { ItemCardProps } from '../../../homeTypes';

export const ItemCard = ({ card }: ItemCardProps) => (
  <img className='itemCardImg' src={card.itemType.asset} alt='Craft item' />
);

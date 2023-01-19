import { BundleContent } from './CraftComponent';

interface ItemCardProps {
  card: BundleContent;
}

export const ItemCard = (props: ItemCardProps) => {
  const { card } = props;
  return (
    <div className='itemCard'>
      <img className='itemCardImg' src={card.itemType.asset} />
    </div>
  );
};

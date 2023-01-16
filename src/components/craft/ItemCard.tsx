import { BundleContent } from './CraftComponent';

interface ItemCardProps {
  card: BundleContent;
}

export const ItemCard = (props: ItemCardProps) => {
  const { card } = props;
  console.log(card);
  return (
    <div className='itemCard'>
      <img className='itemCardImg' src={card.itemType.asset} />
    </div>
  );
};

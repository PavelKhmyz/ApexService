import { CraftDataObject } from './CraftComponent';
import { ItemCard } from './ItemCard';

interface CraftElementProps {
  craftElement: CraftDataObject;
}

export const CraftElement = (props: CraftElementProps) => {
  const { craftElement } = props;
  const { bundleContent } = craftElement;

  return (
    <div className='craftElement'>
      <span>{craftElement.bundleType}</span>
      <div className='cardsWrapper'>
        {bundleContent.map((el) => (
          <ItemCard key={el.item} card={el} />
        ))}
      </div>
    </div>
  );
};

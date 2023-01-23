import { CraftResponseType } from '../../../../../redux/initialStates/Types/craftInitialStateTypes';
import { ItemCard } from './ItemCard';

interface CraftElementProps {
  craftElement: CraftResponseType;
}

export const CraftElement = ({ craftElement }: CraftElementProps) => {
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

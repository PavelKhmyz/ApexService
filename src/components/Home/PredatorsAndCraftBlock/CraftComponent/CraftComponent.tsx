import { CraftResponseType } from './CraftComponent.type';
import { CraftElement } from './components/CraftElement';
import { parseProps } from './CraftComponent.utils';

interface CraftComponentPropsType {
  data: [CraftResponseType];
}

export const CraftComponent = ({ data }: CraftComponentPropsType) => {
  const craftData = parseProps(data);

  return (
    <div className='craftWrapper'>
      <p className='craftTitle'>Craft Rotation</p>
      {craftData.map((el) => (
        <CraftElement key={el.bundle} craftElement={el} />
      ))}
    </div>
  );
};

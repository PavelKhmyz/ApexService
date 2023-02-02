import { ThemeElementType } from './theme';

interface ThemeSelectOptionProps {
  data: ThemeElementType;
}

export const ThemeSelectOption = ({ data }: ThemeSelectOptionProps) => (
  <option value={data.name}>{data.name}</option>
);

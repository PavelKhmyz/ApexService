import { SelectOptionProps } from '../../commonTypes';

export const SelectOption = ({ data, value = data }: SelectOptionProps) => (
  <option value={value}>{data}</option>
);

interface SelectOptionProps {
  data: string;
  value?: string;
}

export const SelectOption = ({ data, value = data }: SelectOptionProps) => (
  <option value={value}>{data}</option>
);

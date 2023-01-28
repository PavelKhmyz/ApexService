interface SelectOptionProps {
  data: string;
}

export const SelectOption = ({ data }: SelectOptionProps) => (
  <option value={data}>{data}</option>
);

interface SelectOptionProps {
  data: string;
}

export const SelectOption = ({ data }: SelectOptionProps) => {
  return <option value={data}>{data}</option>;
};

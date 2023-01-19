interface LegendStatsProps {
  data: {
    global: boolean;
    key: string;
    name: string;
    value: number;
  };
}

export const LegendStats = ({ data }: LegendStatsProps) => {
  return (
    <div>
      <h3>
        {data.name}: {data.value}
      </h3>
    </div>
  );
};

import { useEffect } from "react";
import { SelectedLegend } from "./components/SelectedLegend";
import "./legendsPageStyle.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../redux/hooks/hook";
import {
  changeSearchValue,
  setNewLegend,
} from "../../../../../../redux/reducer/playerStatsSlice";
import { SelectElement } from "../../../../../common/select/SelectElement";
import { LegendsPageProps } from "../../../homeTypes";

export const LegendsPage = ({ data }: LegendsPageProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.playerStats.searchValue);
  const newLegend = useAppSelector((state) => state.playerStats.newLegend);
  const { all } = data;
  const selectKeys = Object.keys(data.all);

  useEffect(() => {
    dispatch(changeSearchValue(data.selected.LegendName));
  }, [data.selected.LegendName, dispatch]);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const legendName = event.target.value;
    const legendData = all[legendName]
    dispatch(setNewLegend(legendData));
  };

  return (
    <div className="legendWrapper">
      <div className="legendsSearch">
        <SelectElement
          title={"Legend Name:"}
          value={searchValue}
          optionsArray={selectKeys}
          handleChange={handleChangeInputValue}
        />
      </div>
      <div className="legendContentWrapper">
        {!newLegend ? (
          <SelectedLegend data={data.selected} />
        ) : (
          <SelectedLegend data={newLegend} />
        )}
      </div>
    </div>
  );
};

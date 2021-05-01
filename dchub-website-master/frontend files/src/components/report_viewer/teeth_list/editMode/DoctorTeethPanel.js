import React from "react";
import TeethPanel from "../../main_panel/teeth_panel_section/TeethPanel";
import ConclusionCard from "../ConclusionCard";
import FilterCard from "../FilterCard";
import Finalyze from "../Finalyze";
import ToothItem from "../ToothItem";

export const DoctorTeethPanel = ({
  xrayImg,
  reportId,
  xrayId,
  filters,
  quadrants,
  dispatch,
  summary,
  teeth,
}) => {
  const urqElements = React.useMemo(
    () =>
      quadrants.urq.map((item) => {
        return (
          <ToothItem
            toothrow={item}
            img={xrayImg}
            dispatch={dispatch}
            isVerified={teeth[item.tooth_name].verified}
          />
        );
      }),
    [teeth]
  );
  const ulqElements = React.useMemo(
    () =>
      quadrants.ulq.map((item) => {
        return (
          <ToothItem
            toothrow={item}
            img={xrayImg}
            dispatch={dispatch}
            isVerified={teeth[item.tooth_name].verified}
          />
        );
      }),
    [teeth]
  );
  const llqElements = React.useMemo(
    () =>
      quadrants.llq.map((item) => {
        return (
          <ToothItem
            toothrow={item}
            img={xrayImg}
            dispatch={dispatch}
            isVerified={teeth[item.tooth_name].verified}
          />
        );
      }),
    [teeth]
  );
  const lrqElements = React.useMemo(
    () =>
      quadrants.lrq.map((item) => {
        return (
          <ToothItem
            toothrow={item}
            img={xrayImg}
            dispatch={dispatch}
            isVerified={teeth[item.tooth_name].verified}
          />
        );
      }),
    [teeth]
  );

  return (
    <div className={{ maxWidth: "100%", marginLeft: "auto" }}>
      <TeethPanel teeth={teeth} />

      <FilterCard filters={filters} setfilters={dispatch} />
      {filters.urq && urqElements}
      {filters.ulq && ulqElements}
      {filters.llq && llqElements}
      {filters.lrq && lrqElements}
      <ConclusionCard summary={summary} dispatch={dispatch} />
      <Finalyze
        reportId={reportId}
        xrayId={xrayId}
        teethMap={teeth}
        summary={summary}
      />
    </div>
  );
};

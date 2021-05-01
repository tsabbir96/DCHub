import React from "react";
import TeethPanel from "../../../report_viewer/main_panel/teeth_panel_section/TeethPanel";
import MouthConclusionCard from "./MouthConclusionCard";
import MouthFilterCard from "./MouthFilterCard";
import MouthFinalyze from "./MouthFinalyze";
import MouthToothItem from "./MouthToothItem";

export default function MouthDoctorTeethPanel({
  imagesInfoId,
  imagesInfoClosedFront,
  reportId,
  filters,
  quadrants,
  teeth,
  dispatch,
  summary,
}) {
  const urqElements = React.useMemo(
    () =>
      quadrants.urq.map((item) => {
        return (
          <MouthToothItem
            toothrow={item}
            img={imagesInfoClosedFront}
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
          <MouthToothItem
            toothrow={item}
            img={imagesInfoClosedFront}
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
          <MouthToothItem
            toothrow={item}
            img={imagesInfoClosedFront}
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
          <MouthToothItem
            toothrow={item}
            img={imagesInfoClosedFront}
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

      <MouthFilterCard filters={filters} setfilters={dispatch} />
      {filters.urq && urqElements}
      {filters.ulq && ulqElements}
      {filters.llq && llqElements}
      {filters.lrq && lrqElements}
      <MouthConclusionCard summary={summary} dispatch={dispatch} />
      <MouthFinalyze
        reportId={reportId}
        imagesInfoId={imagesInfoId}
        teethMap={teeth}
        summary={summary}
      />
    </div>
  );
}

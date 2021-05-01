import React from "react";
import TeethPanel from "../../../report_viewer/main_panel/teeth_panel_section/TeethPanel";
import MouthFilterCard from "../edit/MouthFilterCard";
import MouthConclusionCardReadOnly from "./MouthConclusionCardReadOnly";
import MouthFinalyzeReadOnly from "./MouthFinalyzeReadOnly";
import MouthToothItemReadOnly from "./MouthToothItemReadOnly";
export default function MouthPatientTeethPanel({
  imagesInfoClosedFront,
  dispatch,
  filters,
  quadrants,
  summary,
  teeth,
}) {
  const urqElements = React.useMemo(
    () =>
      quadrants.urq.map((item) => {
        return (
          <MouthToothItemReadOnly
            key={item.tooth_name}
            toothrow={item}
            img={imagesInfoClosedFront}
          />
        );
      }),
    [teeth]
  );
  const ulqElements = React.useMemo(
    () =>
      quadrants.ulq.map((item) => {
        return (
          <MouthToothItemReadOnly
            key={item.tooth_name}
            toothrow={item}
            img={imagesInfoClosedFront}
          />
        );
      }),
    [teeth]
  );
  const llqElements = React.useMemo(
    () =>
      quadrants.llq.map((item) => {
        return (
          <MouthToothItemReadOnly
            key={item.tooth_name}
            toothrow={item}
            img={imagesInfoClosedFront}
          />
        );
      }),
    [teeth]
  );
  const lrqElements = React.useMemo(
    () =>
      quadrants.lrq.map((item) => {
        return (
          <MouthToothItemReadOnly
            key={item.tooth_name}
            toothrow={item}
            img={imagesInfoClosedFront}
          />
        );
      }),
    [teeth]
  );
  return (
    <div className={{ marginLeft: "auto", maxWidth: "100%" }}>
      <TeethPanel teeth={teeth} />

      <MouthFilterCard filters={filters} setfilters={dispatch} />
      {filters.urq && urqElements}
      {filters.ulq && ulqElements}
      {filters.llq && llqElements}
      {filters.lrq && lrqElements}
      <MouthConclusionCardReadOnly summary={summary} />

      <MouthFinalyzeReadOnly teethMap={teeth} />
    </div>
  );
}

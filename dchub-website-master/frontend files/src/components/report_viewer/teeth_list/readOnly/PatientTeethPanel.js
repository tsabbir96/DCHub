import React from "react";
import TeethPanel from "../../main_panel/teeth_panel_section/TeethPanel";
import FilterCard from "../FilterCard";
import ConclusionCardReadOnly from "./ConclusionCardReadOnly";
import FinalyzeReadOnly from "./FinalyzeReadOnly";
import ToothItemReadOnly from "./ToothItemReadOnly";

export const PatientTeethPanel = ({
  xrayImg,
  filters,
  quadrants,
  dispatch,
  summary,
  teeth,
}) => {
  const urqElements = React.useMemo(
    () =>
      quadrants.urq.map((item) => {
        return <ToothItemReadOnly  key={item.tooth_name} toothrow={item} img={xrayImg} />;
      }),
    [teeth]
  );
  const ulqElements = React.useMemo(
    () =>
      quadrants.ulq.map((item) => {
        return <ToothItemReadOnly  key={item.tooth_name} toothrow={item} img={xrayImg} />;
      }),
    [teeth]
  );
  const llqElements = React.useMemo(
    () =>
      quadrants.llq.map((item) => {
        return <ToothItemReadOnly  key={item.tooth_name} toothrow={item} img={xrayImg} />;
      }),
    [teeth]
  );
  const lrqElements = React.useMemo(
    () =>
      quadrants.lrq.map((item) => {
        return(  
          // <h4>test</h4>
        <ToothItemReadOnly   key={item.tooth_name} toothrow={item} img={xrayImg} /> 
          )
       
      }),
    [teeth]
  );
  return (
    <div className={{ marginLeft: "auto", maxWidth: "100%" }}>
       <TeethPanel       teeth={teeth}  
 />

      <FilterCard filters={filters} setfilters={dispatch} />
      {filters.urq && urqElements}
       {filters.ulq && ulqElements}
      {filters.llq && llqElements} 
      {filters.lrq && lrqElements} 
     <ConclusionCardReadOnly summary={summary} />

      <FinalyzeReadOnly teethMap={teeth} />
    </div>
  );
};

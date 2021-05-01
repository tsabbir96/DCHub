import React from "react";
import RecommendationsDiagnobot from "./RecommendationsDiagnobot";
import SummaryResults from "./SummaryResults";

const Results = ({ value, setValue, type }) => {
  return (
    <div>
      <RecommendationsDiagnobot type={type} />
      <SummaryResults value={value} setValue={setValue} type={type} />
    </div>
  );
};
export default Results;

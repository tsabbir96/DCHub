import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useAnnotatorState } from "../../context/annotator/AnnotatorContext";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import { DoctorTeethPanel } from "./editMode/DoctorTeethPanel";
import { PatientTeethPanel } from "./readOnly/PatientTeethPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    marginLeft: "auto",
    maxWidth: "100%",
  },
  toothIcon: {
    alignSelf: "center",
    padding: theme.spacing(1, 0),
    height: "60px",
    fill: theme.palette.text.disabled,
  },
  accordion: {
    backgroundColor: theme.palette.background.default,
    border: "none",
    elevation: "0",
    boxShadow: "none",
  },
  accordionDetails: {
    // display: 'flex',
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
}));

export const ACTIONS = {
  INIT: "INIT",
  SET_FILTER: "SET_FILTER",
  SET_TOOTH_VERIFICATION: "SET_TOOTH_VERIFICATION",
  SET_TOOTH_ISSUES: "SET_TOOTH_ISSUES",
  SET_SUMMARY: "SET_SUMMARY",
};

const buildInitialState = (xrayReport) => {
  const quadrantMap = createQuadrantMap(xrayReport);
  const teeth = createTeethMap(quadrantMap);
  return {
    // totalIssues: 0, @TODO think about it

    filters: {
      urq: true,
      ulq: true,
      lrq: true,
      llq: true,
    },
    quadrants: quadrantMap,
    teeth,
    summary: xrayReport.remarks_and_summ,
  };
};
const createQuadrantMap = (xrayReport) => {
  const quadrants = {
    urq: [],
    ulq: [],
    lrq: [],
    llq: [],
  };
  xrayReport.quadrants.forEach((item) => {
    switch (item.quadrant_info_name.toLowerCase()) {
      case "urq":
        quadrants.urq = item.teeth_array.sort(
          (a, b) => Number(a.tooth_name) - Number(b.tooth_name)
        );
        break;
      case "ulq":
        quadrants.ulq = item.teeth_array.sort(
          (a, b) => Number(a.tooth_name) - Number(b.tooth_name)
        );
        break;
      case "lrq":
        quadrants.lrq = item.teeth_array.sort(
          (a, b) => Number(a.tooth_name) - Number(b.tooth_name)
        );
        break;
      case "llq":
        quadrants.llq = item.teeth_array.sort(
          (a, b) => Number(a.tooth_name) - Number(b.tooth_name)
        );
        break;
      default:
        break;
    }
  });
  return quadrants;
};

const createTeethMap = (quadrantMap) => {
  /**@TODO replace key from tooth_name to tooth.id */
  const allTeeth = {};
  for (const teethList of Object.values(quadrantMap)) {
    for (const tooth of teethList) {
      allTeeth[tooth.tooth_name] = {
        verified: tooth.is_verified,
        issues: tooth.findings.length,
        position: tooth.position,
        tooth_name: tooth.tooth_name,
        tooth_id: tooth.id,
      };
    }
  }
  return allTeeth;
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT: {
      // quadrants
      // summary
      // teethlist
      return state;
    }
    case ACTIONS.SET_FILTER: {
      const { filterName, filterValue } = action;
      const newState = { ...state };
      newState.filters[filterName] = filterValue;
      return newState;
    }
    case ACTIONS.SET_TOOTH_VERIFICATION: {
      const { toothName, verified } = action;
      const newState = { ...state };
      newState.teeth = { ...state.teeth };
      newState.teeth[toothName].verified = verified;
      return newState;
    }
    case ACTIONS.SET_TOOTH_ISSUES: {
      const { toothName, issues } = action;
      const newState = { ...state };
      newState.teeth[toothName].issues = issues;
      return newState;
    }
    case ACTIONS.SET_SUMMARY: {
      const { summary } = action;
      const newState = { ...state };
      newState.summary = summary;
      return newState;
    }
    default:
      return state;
  }
};

const TeethList = ({ xrayInfo, numbering, setNumbering }) => {
  // #############################################
  // DECLARING VARIABLES
  // #############################################

  const [state, dispatch] = React.useReducer(
    reducer,
    buildInitialState(xrayInfo.report)
  );
  const [, dispatchAnnotations] = useAnnotatorState();
  React.useEffect(() => {
    dispatchAnnotations({
      type: "INIT",
      payload: state.teeth,
    });
  }, []);
  const [profile] = useProfileData();
  if (profile.profile.user.account_type.toLowerCase() === "patient") {
    return (
      <PatientTeethPanel
        xrayImg={xrayInfo.xray_image}
        dispatch={dispatch}
        filters={state.filters}
        quadrants={state.quadrants}
        summary={state.summary}
        teeth={state.teeth}
      />
    );
  } else
    return (
      <DoctorTeethPanel
        xrayId={xrayInfo.id}
        xrayImg={xrayInfo.xray_image}
        reportId={xrayInfo.report.id}
        filters={state.filters}
        quadrants={state.quadrants}
        teeth={state.teeth}
        dispatch={dispatch}
        summary={state.summary}
      />
    );
};

export default React.memo(TeethList);

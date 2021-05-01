import React from "react";
import {
  SET_ASKED_QUESTIONS,
  SET_CONDITIONS,
  SET_DIAGNO_ID,
  SET_IMAGE01,
  SET_IMAGE02,
  SET_IMAGE03,
  SET_IMAGE04,
  SET_IMAGE05,
  SET_IMAGE06,
  SET_IMAGES_ID,
  SET_IS_XRAY_MISSING,
  SET_PATIENTDATA_ID,
  SET_PROVIDED_ANSWERS,
  SET_PROVIDED_SUGGESTIONS,
  SET_SUBMISSION_ID,
  SET_XRAY,
  SET_XRAY_ID,
} from "./diagnobot_types";
function reducer(state, { type, payload }) {
  switch (type) {
    case SET_CONDITIONS:
      return {
        ...state,
        conditions: payload,
      };
    case SET_SUBMISSION_ID:
      return {
        ...state,
        submissionId: payload,
      };
    case SET_PATIENTDATA_ID:
      return {
        ...state,
        patientDataId: payload,
      };
    case SET_XRAY_ID:
      return {
        ...state,
        xrayId: payload,
      };
    case SET_IMAGES_ID:
      return {
        ...state,
        imagesId: payload,
      };
    case SET_DIAGNO_ID:
      return {
        ...state,
        diagnoId: payload,
      };

    case SET_ASKED_QUESTIONS:
      return {
        ...state,
        askedQuestions: payload,
      };
    case SET_PROVIDED_SUGGESTIONS:
      return {
        ...state,
        providedSuggestions: payload,
      };
    case SET_PROVIDED_ANSWERS:
      return {
        ...state,
        providedAnswers: payload,
      };

    case SET_XRAY:
      return {
        ...state,
        xray: payload,
      };
    case SET_IS_XRAY_MISSING:
      return {
        ...state,
        isXrayMissing: payload,
      };

    case SET_IMAGE01:
      return {
        ...state,
        image01: payload,
      };

    case SET_IMAGE02:
      return {
        ...state,
        image02: payload,
      };

    case SET_IMAGE03:
      return {
        ...state,
        image03: payload,
      };

    case SET_IMAGE04:
      return {
        ...state,
        image04: payload,
      };

    case SET_IMAGE05:
      return {
        ...state,
        image05: payload,
      };
    case SET_IMAGE06:
      return {
        ...state,
        image06: payload,
      };

    default:
      return state;
  }
}

const DiagnobotContext = React.createContext();

export default function DiagnobotProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    type: "",
    submissionId: 0,
    patientDataId: 0,
    xrayId: 0,
    isXrayMissing: false,
    imagesId: 0,
    diagnoId: 0,
    // diagnobot,
    conditions: [],
    askedQuestions: [],
    providedSuggestions: [],
    providedAnswers: [],
  });

  return (
    <DiagnobotContext.Provider value={[state, dispatch]}>
      {children}
    </DiagnobotContext.Provider>
  );
}
export const useDiagnoState = () => {
  return React.useContext(DiagnobotContext);
};

import React from "react";
function reducer(state, action) {
  switch (action.type) {
    case "SET_IMAGE_BASE": {
      const newState = { ...state };
      newState.sharedImage = action.payload.image;
      newState.sharedImageScale = action.payload.scale;
      return newState;
    }
    case "INIT": {
      const annotations = [];
      const teethKeyAnnotations = {};
      for (const t of Object.values(action.payload)) {
 
        for (const p of t.position) {
          p.tooth_name = t.tooth_name;
          p.tooth_id = t.tooth_id;
           annotations.push(p);

          if (p.text_label === "t" + t.tooth_name) {
            teethKeyAnnotations[t.tooth_name] = p;
          }
        }
      }

      const newState = { ...state };
      newState.annotations = annotations;
      newState.teethKeyAnnotations = teethKeyAnnotations;

      return newState;
    }

    case "ADD_TOOTH_ANNOTATION": {
      const newState = { ...state };
      newState.annotations = [...state.annotations, action.payload];
      return newState;
    }

    case "UPDATE_TOOTH_ANNOTATION": {
      const newState = { ...state };
      if (action.payload.text_label === "t" + action.payload.tooth_name) {
        newState.teethKeyAnnotations[action.payload.tooth_name] =
          action.payload;
      }
      newState.annotations = newState.annotations.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return newState;
    }
    case "DELETE_ANNOTATION": {
      const newState = { ...state };
      newState.annotations = newState.annotations.filter(
        (an) => an.id !== action.payload
      );
      return newState;
    }
    case "SET_TOOTH_FILTER": {
      const newState = { ...state };
      newState.annotations = newState.annotations.map((item) => {
        if (item.tooth_name === action.payload.tooth_name) {
          item.visible = action.payload.value;
        }
        return item;
      });
      return newState;
    }

    default:
      return state;
  }
}
export const AnnotatorContext = React.createContext();
export default function AnnotatorProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    annotations: [],
    sharedImage: null,
    sharedImageScale: 1,
    teethKeyAnnotations: {},
    // toothFilter: {},
  });

  return (
    <AnnotatorContext.Provider value={[state, dispatch]}>
      {children}
    </AnnotatorContext.Provider>
  );
}

export const useAnnotatorState = () => {
  return React.useContext(AnnotatorContext);
};

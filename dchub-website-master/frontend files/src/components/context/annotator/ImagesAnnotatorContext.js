import React from "react";

const getImages = (imagesInfo) => {
  let __imagesList = [];
  __imagesList.push(imagesInfo.closed_front);
  __imagesList.push(imagesInfo.closed_left);
  __imagesList.push(imagesInfo.closed_right);

  __imagesList.push(imagesInfo.closed_up);
  __imagesList.push(imagesInfo.opened_down);
  __imagesList.push(imagesInfo.opened_up);
  return __imagesList;
};

export const keyFromUrl = (url) => {
  return url.match(/\/mouth_images\/(.*)\.(png|jpg|jpeg|webp)/)[1];
};
function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      const { teeth, imagesInfo } = action.payload; // Got from MouthTeethList.js
      const newState = { ...state };
      newState.images = getImages(imagesInfo);
      newState.activeImage = newState.images[0];
      newState.activeImageKey = keyFromUrl(newState.images[0]);

      for (const tooth of Object.values(teeth)) {
        for (const pos of tooth.position) {
          pos.tooth_id = tooth.tooth_id;
          if (keyFromUrl(pos.src) in newState.annotations) {
            newState.annotations[keyFromUrl(pos.src)].push(pos);
          } else newState.annotations[keyFromUrl(pos.src)] = [pos];
        }
      }
      window.debugAnn = newState.annotations;
      newState.activeAnnotationList =
        newState.annotations[newState.activeImageKey];
      return newState;
    }
    case "ADD_TOOTH_ANNOTATION": {
      const newState = { ...state };
      action.payload.src = state.activeImage;
      if (newState.annotations[state.activeImageKey]) {
        newState.annotations[state.activeImageKey].push(action.payload);
      } else {
        newState.annotations[state.activeImageKey] = [action.payload];
      }
      newState.activeAnnotationList = [
        ...newState.annotations[state.activeImageKey],
      ];

      return newState;
    }
    case "UPDATE_TOOTH_ANNOTATION": {
      const newState = { ...state };
      newState.annotations[state.activeImageKey] = newState.annotations[
        state.activeImageKey
      ].map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });

      newState.activeAnnotationList =
        newState.annotations[state.activeImageKey];
      return newState;
    }
    case "DELETE_ANNOTATION": {
      const newState = { ...state };
      newState.annotations[state.activeImageKey] = newState.annotations[
        state.activeImageKey
      ].filter((an) => an.id !== action.payload);
      newState.activeAnnotationList =
        newState.annotations[state.activeImageKey];

      return newState;
    }
    case "SET_IMAGE_BASE": {
      const newState = { ...state };
      newState.sharedImage = action.payload.image;
      newState.sharedImageScale = action.payload.scale;
      return newState;
    }
    case "CHANGE_ACTIVE_IMAGE": {
      const newState = { ...state };
      newState.activeImageIndex = Math.min(
        Math.max(0, newState.activeImageIndex + action.payload),
        newState.images.length -1
      );
      newState.activeImage = newState.images[newState.activeImageIndex];
      newState.activeImageKey = keyFromUrl(newState.activeImage);
      newState.activeAnnotationList =
        newState.annotations[newState.activeImageKey];
      return newState;
    }
    case "SET_TOOTH_VISIBILITY": {
      const newState = { ...state };
      newState.annotations[newState.activeImage] = newState.annotations[
        newState.activeImageKey
      ].map((item) => {
        if (item.tooth_name === action.payload.tooth_name) {
          item.visible = action.payload.value;
        }
        return item;
      });
      newState.activeAnnotationList =
        newState.annotations[state.activeImageKey];
      return newState;
    }
    default: {
      return state;
    }
  }
}
export const ImagesAnnotatorContext = React.createContext();
export default function ImagesAnnotatorProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    images: [],
    activeImage: "",
    activeImageIndex: 0,
    activeImageKey: "",
    activeAnnotationList: [],
    annotations: {},
    filters: {},
    sharedImage: null,
    sharedImageScale: 1,
  });

  return (
    <ImagesAnnotatorContext.Provider value={[state, dispatch]}>
      {children}
    </ImagesAnnotatorContext.Provider>
  );
}

export const useImagesAnnotatorState = () => {
  return React.useContext(ImagesAnnotatorContext);
};

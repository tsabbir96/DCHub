import React from "react";
import {
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    EDIT_GS_PROFILE_FAIL,
    EDIT_GS_PROFILE_SUCCESS,
    EDIT_MH_PROFILE_FAIL,
    EDIT_MH_PROFILE_SUCCESS,
    EDIT_TEETH_PREFS_FAIL,
    EDIT_TEETH_PREFS_SUCCESS,
    FACEBOOK_AUTH_FAIL,
    FACEBOOK_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    GOOGLE_AUTH_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    PROFILE_LOADED_FAIL,
    PROFILE_LOADED_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    USER_LOADED_FAIL,
    USER_LOADED_SUCCESS
} from "./types";

const ProfileContext = React.createContext([]);

function reducer(state, { type, payload }) {
  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
    case GOOGLE_AUTH_SUCCESS:
    case FACEBOOK_AUTH_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case PROFILE_LOADED_SUCCESS:
    case EDIT_GS_PROFILE_SUCCESS:
    case EDIT_MH_PROFILE_SUCCESS:
    case EDIT_TEETH_PREFS_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case PROFILE_LOADED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        profile: null,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        profile: null,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,

        user: null,
        profile: null,
      };
    case GOOGLE_AUTH_FAIL:
    case FACEBOOK_AUTH_FAIL:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
        profile: null,
      };
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
    case EDIT_GS_PROFILE_FAIL:
    case EDIT_MH_PROFILE_FAIL:
    case EDIT_TEETH_PREFS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const ProfileDataProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: false,
    // user: null,
    profile: null,
  });
  return (
    <ProfileContext.Provider value={[state, dispatch]}>
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfileData = () => {
  return React.useContext(ProfileContext);
};

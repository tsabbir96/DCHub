import axios from "axios";
import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
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
  SIGNUP_SUCCESS
} from "./types";

export const googleAuthenticate = async (state, code, dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const details = {
      state: state,
      code: code,
    };
    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`,
        config
      );
      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: res.data,
      });
      //TODO
        load_profile(dispatch);
    } catch (err) {
      dispatch({
        type: GOOGLE_AUTH_FAIL,
      });
    }
  }
};
export const facebookAuthenticate = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const details = {
      state: state,
      code: code,
    };
    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?${formBody}`,
        config
      );
      dispatch({
        type: FACEBOOK_AUTH_SUCCESS,
        payload: res.data,
      });
      load_profile(dispatch);
    } catch (err) {
      dispatch({
        type: FACEBOOK_AUTH_FAIL,
      });
    }
  }
};

export const checkAuthenticated = async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ refresh: localStorage.getItem("refresh") });
    try {
      const res = await axios.post(`/auth/jwt/refresh/`, body, config);
      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
        return res;
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
        return res;
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
    return "error";
  }
};

export const load_profile = async (id,dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/profile/patient/?user=${id}`, config);

       dispatch({
        type: PROFILE_LOADED_SUCCESS,
        payload: res.data[0],
      });
      return res;
    } catch (err) {
      dispatch({
        type: PROFILE_LOADED_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: PROFILE_LOADED_FAIL,
    });
    return "error";
  }
};

export const load_doctor_profile = async (id,dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/profile/doctor/?user=${id}`, config);
      dispatch({
        type: PROFILE_LOADED_SUCCESS,
        payload: res.data[0],
      });
      return res;
    } catch (err) {
      dispatch({
        type: PROFILE_LOADED_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: PROFILE_LOADED_FAIL,
    });
    return "error";
  }
};

export const load_user = async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("/profile/user/", config);

      return res;
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: LOGIN_FAIL,
    });
    return "error";
  }
};

export const login = async (email, password, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`/auth/jwt/create/`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    return res;
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    return { ok: false };
  }
};
export const signup = async (
  first_name,
  last_name,
  email,
  account_type,
  password,
  re_password,
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    account_type,
    password,
    re_password,
  });
  try {
    const res = await axios.post(`/auth/users/`, body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    return { ok: true };
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });
    return { ok: false };
  }
};

export const verify = async (uid, token, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token });
  try {
    await axios.post(`/auth/users/activation/`, body, config);
    dispatch({
      type: ACTIVATION_SUCCESS,
    });
    return { ok: true };
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
    return { ok: false };
  }
};
export const reset_password = async (email, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  try {
    await axios.post(`/auth/users/reset_password/`, body, config);
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
    return { ok: true };
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
    return { ok: false };
  }
};
export const reset_password_confirm = async (
  uid,
  token,
  new_password,
  re_new_password,
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token, new_password, re_new_password });
  try {
    await axios.post(`/auth/users/reset_password_confirm/`, body, config);
    dispatch({
      type: PASSWORD_RESET_CONFIRM_SUCCESS,
    });
    return { ok: true };
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_CONFIRM_FAIL,
    });
    return { ok: false };
  }
};
export const logout = async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

//###########################################
//update  editGeneralSectionProfile
//###########################################

export const editGeneralSectionProfile = async (
  id,
  first_name,
  last_name,
  birthday,
  phone,
  gender,
  weight,
  neck_size_inch,
  last_medical_exam,
  last_dental_exam,
  country,
  city,
  current_dentist_name,
  current_dentist_phone,
  current_dentist_email,
  current_dentist_website,
  is_New
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      first_name,
      last_name,
      birthday,
      phone,
      gender,
      weight,
      neck_size_inch,
      last_medical_exam,
      last_dental_exam,
      country,
      city,
      current_dentist_name,
      current_dentist_phone,
      current_dentist_email,
      current_dentist_website,
      is_New,
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   updateCustomeIdPatient
//###########################################

export const updateCustomeIdPatientAndStatus = async (id, customer_id, is_subscribed ,is_verified) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      is_subscribed, is_verified ,customer_id
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   updateCustomeIdPatient
//###########################################

export const updatePatientStatus = async (id,  is_subscribed ) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      is_subscribed, 
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   updateCustomerId and limited eval slots Patient
//###########################################

export const updateCustomerIdAndLimitedEvalPatient = async (
  id,

  customer_id,
  limited_eval_slots,
  is_verified
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      customer_id,
      limited_eval_slots,
      is_verified
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   updateCustomerId and limited eval slots Patient
//###########################################

export const updateCustomerIdAndComprehensiveEvalPatient = async (
  id,

  customer_id,
  comprehensive_eval_slots,
  is_verified
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      customer_id,
      comprehensive_eval_slots,is_verified
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   decreaseLimitedEvalSlots
//###########################################

export const decreaseLimitedEvalSlots = async (
  id,

   
  limited_eval_slots
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      limited_eval_slots
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   decreaseComprehensiveEvalSlots
//###########################################

export const decreaseComprehensiveEvalSlots = async (
  id,

   
  comprehensive_eval_slots
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      comprehensive_eval_slots
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//   updateCustomeIdDoctor
//###########################################

export const updateCustomerIdAndStatusDoctor = async (
  id,
    customer_id,
  is_subscribed
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      is_subscribed,customer_id
    });

    try {
      const data = await axios.patch(`/profile/doctor/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//   updateStatusDoctor
//###########################################

export const updateStatusDoctor = async (
  id,
   is_subscribed
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      is_subscribed 
    });

    try {
      const data = await axios.patch(`/profile/doctor/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//update  editGeneralSectionDoctor
//###########################################

export const editGeneralSectionDoctor = async (
  id,
  first_name,
  last_name,
  phone,
  birthday,
  gender,
  degree,
  dental_speciality,
  name_of_practice,

  license_country,
  practice_city,
  practice_zip_code,
  practice_website,
  is_New
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      first_name,
      last_name,
      phone,
      birthday,
      gender,
      degree,
      dental_speciality,
      name_of_practice,

      license_country,
      practice_city,
      practice_zip_code,
      practice_website,
      is_New,
    });

    try {
      const data = await axios.patch(`/profile/doctor/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//update  editAboutPracticeDoc
//###########################################

export const editAboutPracticeDoc = async (
  id,
  active_license,
  accept_new_patients,
  average_new_patients_month
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      active_license,
      accept_new_patients,
      average_new_patients_month,
    });

    try {
      const data = await axios.patch(`/profile/doctor/${id}/`, body, config);
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//update  editMedicalHistory
//###########################################
export const editMedicalHistory = async (
  id,
  medical_history,
  dental_history,
  explanation,
  current_medication,
  biphosphonate_medication, //boolean isBiphosphonate
  name_biphosphonate_medication,
  date_last_dose,
  allergies
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      medical_history,
      dental_history,
      explanation,
      current_medication,
      biphosphonate_medication,
      name_biphosphonate_medication,
      date_last_dose,
      allergies,
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);

      return data;
    } catch (err) {
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//update  editTeethPrefs
//###########################################
export const editTeethPrefs = async (
  id,
  teeth_prefs,
  more_about_teeth,
  preferred_treatment_location
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      teeth_prefs,

      more_about_teeth,
      preferred_treatment_location,
    });

    try {
      const data = await axios.patch(`/profile/patient/${id}/`, body, config);

      return data;
    } catch (err) {
      return err;
    }
  } else {
    return "Login error";
  }
};
 
//###########################################
//changeDoctorBanner
//###########################################
export const changeDoctorBanner = async (id, banner_img) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("banner_img", banner_img);

    try {
      const data = await axios.patch(
        `/profile/doctor/${id}/`,
        formData,
        config
      );
      // return {data,res }
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//changeDoctorGovId
//###########################################
export const changeDoctorGovId = async (id, gov_id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("gov_id", gov_id);

    try {
      const data = await axios.patch(
        `/profile/doctor/${id}/`,
        formData,
        config
      );

      // return {data,res }
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//changeDoctorDentalLicense
//###########################################
export const changeDoctorDentalLicense = async (id, dental_license) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("dental_license", dental_license);

    try {
      const data = await axios.patch(
        `/profile/doctor/${id}/`,
        formData,
        config
      );

      // return {data,res }
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//changeDoctorDentalLicense
//###########################################
export const changeDoctorCV = async (id, cv_resume) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("cv_resume", cv_resume);

    try {
      const data = await axios.patch(
        `/profile/doctor/${id}/`,
        formData,
        config
      );

      // return {data,res }
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//changePatientBanner
//###########################################
export const changePatientBanner = async (id, banner_img) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("banner_img", banner_img);

    try {
      const { data } = await axios.patch(
        `/profile/patient/${id}/`,
        formData,
        config
      );
      const res = "ok";
      // return {data,res }
      return data;
    } catch (err) {
      const res = "Error requesting data";

      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//changeDoctorAvatar
//###########################################
export const changeDoctorAvatar = async (id, profile_img) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("profile_img", profile_img);

    try {
      const data = await axios.patch(
        `/profile/doctor/${id}/`,
        formData,
        config
      );
      // return {data,res }
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//update  patient avatar
//###########################################
export const changePatientAvatar = async (id, profile_img) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    let formData = new FormData();
    formData.append("profile_img", profile_img);

    try {
      const data = await axios.patch(
        `/profile/patient/${id}/`,
        formData,
        config
      );
      // return {data,res }
      return data;
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//get patient name
//###########################################
export const get_patient_name = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/profile/patientname/?user=${id}`, config);

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

//###########################################
//get patient name and avatar
//###########################################
export const get_patient_name_and_avatar = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `/profile/patient_name_avatar/?user=${id}`,
        config
      );

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

//###########################################
//get doctor  name
//###########################################
export const get_doctor_name = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/profile/doctorname/?user=${id}`, config);

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};
//###########################################
//get doctor  name and avatar
//###########################################
export const get_doctor_name_and_avatar = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `/profile/doctor_name_avatar/?user=${id}`,
        config
      );

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

//###########################################
//get patient profile
//###########################################
export const get_patient_profile = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/profile/patient/?user=${id}`, config);

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

//###########################################
//get doctor  profile
//###########################################
export const get_doctor_profile = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/profile/doctor/?user=${id}`, config);

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};
//###########################################
//retrieveSub
//###########################################
export const retrieveSub = async (customer_id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ customer_id });
    try {
      return await axios.post(`/payments/test-retrieve/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//make-invoice
//###########################################
export const makeInvoice = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ id });
    try {
      return await axios.post(`/payments/make-invoice/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//retrieveSub
//###########################################
export const cancelSub = async (subscription) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ subscription });
    try {
      return await axios.post(`/payments/cancel-sub/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

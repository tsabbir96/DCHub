import axios from "axios";
import {
  GET_MY_SUBMISSIONS_FAIL,
  GET_MY_SUBMISSIONS_SUCCESS
} from "./submissions_types";

//###########################################
//LOAD MY SUBMISSION
//###########################################
export const load_my_submissions = async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("/submissions/submissions/", config);
      dispatch({
        type: GET_MY_SUBMISSIONS_SUCCESS,
        payload: res.data,
      });
      return res;
    } catch (err) {
      dispatch({
        type: GET_MY_SUBMISSIONS_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: GET_MY_SUBMISSIONS_FAIL,
    });
    return "error";
  }
};

//###########################################
//get   my submission page
//###########################################
export const get_submission_page = async (dispatch, link) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(link, config);
      dispatch({
        type: GET_MY_SUBMISSIONS_SUCCESS,
        payload: res.data,
      });
      return res;
    } catch (err) {
      dispatch({
        type: GET_MY_SUBMISSIONS_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: GET_MY_SUBMISSIONS_FAIL,
    });
    return "error";
  }
};

//###########################################
//LOAD ALL SUBMISSION
//###########################################
export const load_all_submissions = async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("/submissions/submissionsAdmin/", config);

      dispatch({
        type: GET_MY_SUBMISSIONS_SUCCESS,
        payload: res.data,
      });
      return res;
    } catch (err) {
      dispatch({
        type: GET_MY_SUBMISSIONS_FAIL,
      });
      return err;
    }
  } else {
    dispatch({
      type: GET_MY_SUBMISSIONS_FAIL,
    });
    return "error";
  }
};

//###########################################
//CREATE EMPTY SUBMISSION
//###########################################

export const create_empty_submission = async (
  diagnobot,
  patientData,
  mouth_images_id,
  verifier_id,
  xray_id,
  name,
  owner_id,
  status,
  type
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
      diagnobot,
      patientData,
      mouth_images_id,
      verifier_id,
      xray_id,
      name,
      owner_id,
      status,
      type,
    });
    try {
      return await axios.post(`/submissions/submissions/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION DIAGNOBOT
//###########################################
export const update_submission_diagnobot = async (id, diagnobot) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ diagnobot });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//update_submission_diagnobot_for_diagnobot
//###########################################
export const update_submission_diagnobot_for_diagnobot = async (
  id,
  diagnobot,
  status
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ diagnobot, status });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//UPDATE SUBMISSION verifier
//###########################################
export const update_submission_verifier = async (id, verifier_id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ verifier_id });
    try {
      return await axios.patch(
        `/submissions/submissionsAdmin/${id}/`,
        body,
        config
      );

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION recommendations
//###########################################
export const patch_submission_recs = async (
  id,
  status,
  recommendations_advantages,
  recommendations_disadvantages,
  recommendations_risks,
  recommendations_cosmetic_considerations,
  recommendations_dentist_required_qualification,
  recommendations_ttt_time_requirements,
  recommendations_fee_guidelines,
  recommendations_payment_plan_options,
  recommendations_dentist_name,
  recommendations_speciality,
  recommendations_years_of_experience,
  recommendations_clinic_name,
  recommendations_phone,
  recommendations_email,
  recommendations_website
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
      status,
      recommendations_advantages,
      recommendations_disadvantages,
      recommendations_risks,
      recommendations_cosmetic_considerations,
      recommendations_dentist_required_qualification,
      recommendations_ttt_time_requirements,
      recommendations_fee_guidelines,
      recommendations_payment_plan_options,
      recommendations_dentist_name,
      recommendations_speciality,
      recommendations_years_of_experience,
      recommendations_clinic_name,
      recommendations_phone,
      recommendations_email,
      recommendations_website,
    });
    try {
      return await axios.patch(
        `/submissions/submissionsAdmin/${id}/`,
        body,
        config
      );

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//DELETE SUBMISSION
//###########################################
export const delete_submission = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.delete(`/submissions/submissions/${id}/`, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//ADMIN DELETE SUBMISSION
//###########################################
export const admin_delete_submission = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.delete(`/submissions/submissionsAdmin/${id}/`, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//UPDATE SUBMISSION
//###########################################
export const update_submission = async (id, name) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ name });

    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE  DIAGNOBOT
//###########################################

export const updateDiagnobot = async (diagnobot) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify(diagnobot);
    try {
      return await axios.patch(
        `/submissions/diagnobots/${diagnobot.id}/`,
        body,
        config
      );

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//CREATE XRAY REPORT
//###########################################
export const create_xray_report = async (report) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify(report);
    try {
      return await axios.post(`/report/Xrayreport/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//CREATE IMAGE REPORT
//###########################################
export const create_images_report = async (report) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify(report);
    try {
      return await axios.post(`/report/mouthimagereport/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//CREATE XRAY
//###########################################
export const create_xray = async (
  xray_image,
  preliminary_results,
  nbr_issues,
  report_id,
  owner_id,
  status,
  verification_date,
  verifier_id
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        // Accept: "application/json",
      },
    };
    // const body = JSON.stringify({  xray     });
    let formData = new FormData();
    formData.append("xray_image", xray_image);
    formData.append("preliminary_results", preliminary_results);
    formData.append("nbr_issues", nbr_issues);
    formData.append("report_id", report_id);
    formData.append("owner_id", owner_id);
    formData.append("status", status);
    formData.append("verification_date", verification_date);
    formData.append("verifier_id", verifier_id);
    try {
      return await axios.post(`/submissions/xrays/`, formData, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE XRAY IMAGE
//###########################################
export const update_xray_image = async (xray_id, status, xray_image) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        // Accept: "application/json",
      },
    };
    // const body = JSON.stringify({  xray     });
    let formData = new FormData();
    formData.append("status", status);

    formData.append("xray_image", xray_image);

    try {
      return await axios.patch(
        `/submissions/xrays/${xray_id}/`,
        formData,
        config
      );

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//create_xray_without_img
//###########################################
export const create_xray_without_img = async (
  preliminary_results,
  nbr_issues,
  report_id,
  owner_id,
  status,
  verification_date,
  verifier_id,
  dr_email
  // xray_upload_request
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        // Accept: "application/json",
      },
    };
    // const body = JSON.stringify({  xray     });
    let formData = new FormData();

    formData.append("preliminary_results", preliminary_results);
    formData.append("nbr_issues", nbr_issues);
    formData.append("report_id", report_id);
    formData.append("owner_id", owner_id);
    formData.append("status", status);
    formData.append("verification_date", verification_date);
    formData.append("verifier_id", verifier_id);
    formData.append("dr_email", dr_email);
    // formData.append("xray_upload_request", xray_upload_request);

    try {
      return await axios.post(`/submissions/xrays/`, formData, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION XRAY
//###########################################
export const update_submission_xray = async (id, xray_id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ xray_id });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION XRAY and request
//###########################################
export const update_submission_xray_and_req = async (
  id,
  xray_id,
  xray_upload_request_id
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ xray_id, xray_upload_request_id });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE  XRAY req
//###########################################
export const update_xray_req = async (xray_upload_request_id, xray_id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ xray_upload_request_id });
    try {
      return await axios.patch(`/submissions/xrays/${xray_id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//POST  XRAY REQUEST
//###########################################

export const create_xray_request = async (XrayRequests) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify(XrayRequests);
    try {
      return await axios.post(`/report/xrayrequest/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION & status XRAY
//###########################################
export const update_submission_status_xray = async (id, xray_id, status) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ xray_id, status });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION  status
//###########################################
export const update_submission_status = async (id, status) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ status });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION  meeting info
//###########################################
export const update_submission_meeting_info = async (
  id,
  meeting_link,
  meeting_date,
  meeting_recording, meeting_doctor
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
      meeting_link,
      meeting_date,
      meeting_recording,
      meeting_doctor,
    });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//CREATE IMAGES BUNDLE
//###########################################

export const create_images_bundle = async (
  opened_up,
  closed_up,
  closed_left,
  closed_right,
  closed_front,
  opened_down,
  report_id,
  owner_id,
  verifier_id,
  nbr_issues,
  status,
  verification_date
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        // Accept: "application/json",
      },
    };
    // const body = JSON.stringify({  xray     });
    let formData = new FormData();
    formData.append("opened_up", opened_up);
    formData.append("closed_up", closed_up);
    formData.append("closed_left", closed_left);
    formData.append("closed_right", closed_right);
    formData.append("closed_front", closed_front);
    formData.append("opened_down", opened_down);
    formData.append("report_id", report_id);
    formData.append("verifier_id", verifier_id);
    formData.append("nbr_issues", nbr_issues);
    formData.append("owner_id", owner_id);
    formData.append("status", status);
    formData.append("verification_date", verification_date);

    try {
      return await axios.post(`/submissions/mouth_images/`, formData, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION IMAGES BUNDLE
//###########################################

export const update_submission_imagesBundle = async (
  id,
  mouth_images_id,
  status
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ mouth_images_id, status });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE SUBMISSION patientData
//###########################################
export const update_submission_patientData = async (id, patientData) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ patientData });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//patchSubmissionDetailsField
//###########################################
export const patchSubmissionDetailsField = async (id, patient_additions) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ patient_additions });
    try {
      return await axios.patch(`/submissions/submissions/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//UPDATE  patientData object
//###########################################
export const update_patientData = async (
  id,

  first_name,
  last_name,
  phone,
  birthday,
  gender,
  weight,
  neck_size_inch,
  last_medical_exam,
  last_dental_exam,
  country,
  city,
  medical_history,
  dental_history,
  explanation,
  current_medication,
  biphosphonate_medication,
  name_biphosphonate_medication,
  date_last_dose,
  how_you_take_it,
  allergies,
  teeth_prefs,
  more_about_teeth
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
      gender,
      weight,
      neck_size_inch,
      last_medical_exam,
      last_dental_exam,
      country,
      city,
      medical_history,
      dental_history,
      explanation,
      current_medication,
      biphosphonate_medication,
      name_biphosphonate_medication,
      date_last_dose,
      how_you_take_it,
      allergies,
      teeth_prefs,
      more_about_teeth,
    });
    try {
      return await axios.patch(`/submissions/patientData/${id}/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

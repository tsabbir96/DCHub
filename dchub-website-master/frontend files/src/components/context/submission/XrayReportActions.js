import axios from "axios";

export const loadXrayData = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/report/Xrayreport/${id}/`, config);
      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "Requesting error";
  }
};

export const loadDiagnobotData = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/submissions/diagnobots/${id}/`, config);
      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "Requesting error";
  }
};

//###########################################
//UPDATE TOOTH STATUS
//###########################################
export const updateToothStatus = async (
  id,
  is_verified,
  findings,
  solutions,
  position
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ is_verified, findings, solutions, position });

    try {
      return await axios.patch(`/report/tooth/${id}/`, body, config);
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//GET  XRAY
//###########################################
export const get_xray = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/submissions/xrays/${id}/`, config);
      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "Requesting error";
  }
};
//###########################################
//GET  MOUTH IMAGES
//###########################################
export const get_mouthimages = async (id) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/submissions/mouth_images/${id}/`, config);
      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "Requesting error";
  }
};

//###########################################
//UPDATE XRAY ISSUES AND STATUS
//###########################################
export const update_xray_issues_and_status = async (
  id,
  nbr_issues,
  status,
  report
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ nbr_issues, status, report });

    try {
      return await axios.patch(`/submissions/xrays/${id}/`, body, config);
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};
//###########################################
//UPDATE MOUTH IMAGES ISSUES AND STATUS
//###########################################
export const update_mouth_images_issues_and_status = async (
  id,
  nbr_issues,
  status,
  report
) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ nbr_issues, status, report });

    try {
      return await axios.patch(
        `/submissions/mouth_images/${id}/`,
        body,
        config
      );
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE XRAY REPORT SUMMARY
//###########################################
export const update_xray_report_summ = async (id, remarks_and_summ) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ remarks_and_summ });

    try {
      return await axios.patch(`/report/Xrayreport/${id}/`, body, config);
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

//###########################################
//UPDATE mouth images REPORT SUMMARY
//###########################################
export const update_mouth_images_report_summ = async (id, remarks_and_summ) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ remarks_and_summ });

    try {
      return await axios.patch(`/report/mouthimagereport/${id}/`, body, config);
    } catch (err) {
      // return {err,res}
      return err;
    }
  } else {
    return "Login error";
  }
};

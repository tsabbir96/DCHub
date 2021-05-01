import axios from "axios";

export const create_sub_patient = async (data) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.post(`/payments/create_sub_patient/`, data, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};




//###########################################
//   create_sub_doctor
//###########################################
export const create_sub_doctor = async (data) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.post(`/payments/create_sub_doctor/`, data, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

//###########################################
//   order_gold_plan_patient
//###########################################

export const order_gold_plan_patient = async (data) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.post(`/payments/patient-goldplan/`, data, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   order_gold_plan_patient
//###########################################

export const order_platinium_plan_patient = async (data) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.post(`/payments/patient-platiniumPlan/`, data, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};
//###########################################
//   list_paymentIntents
//###########################################

export const list_paymentIntents = async (data) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      return await axios.post(`/payments/list_paymentIntents/`, data, config);
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

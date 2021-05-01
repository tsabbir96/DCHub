import axios from "axios";

//###########################################
//LOAD MY ACTIVITY
//###########################################
export const load_my_activity = async () => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get("/history/history/", config);

      return res;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};
//###########################################
//POST NEW  ACTIVITY
//###########################################

export const create_activity_history = async (title, owner_id, type) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ title,
       owner_id,
        type });
    try {
      return await axios.post(`/history/history/`, body, config);

      // return { ok: true };
    } catch (err) {
      return { ok: false };
    }
  } else {
    return "Login error";
  }
};

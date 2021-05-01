import axios from "axios";

export const loadInitialQuestion = async (query) => {
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
        `/decisiontree/question/?title=${query}`,
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

export const loadQuestion = async (index) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/decisiontree/question/${index}/`, config);
      return res.data;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

export const loadConditions = async () => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`/decisiontree/condition/`, config);
      return res.data;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

export const loadSpecificCondition = async (query) => {
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
        `/decisiontree/condition/?name=${query}`,
        config
      );
      return res.data;
    } catch (err) {
      return err;
    }
  } else {
    return "error";
  }
};

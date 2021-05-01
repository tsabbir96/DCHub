
import axios from "axios";

//###########################################
//get 1st 10 blogs
//###########################################
export const get_first_blogs = async () => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };
      try {
        const res = await axios.get('/blog/blog/', config);
  
        return res;
      } catch (err) {
        return err;
      }
    } else {
      return "error";
    }
  };
  
//###########################################
//get specific page blogs
//###########################################
export const get_page_blogs = async ( link) => {
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
  
        return res;
      } catch (err) {
        return err;
      }
    } else {
      return "error";
    }
  };
  
//###########################################
//get featured blog
//###########################################
export const get_featured_blog = async (id) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };
      try {
        const res = await axios.get('/blog/featured/', config);
  
        return res;
      } catch (err) {
        return err;
      }
    } else {
      return "error";
    }
  };
  
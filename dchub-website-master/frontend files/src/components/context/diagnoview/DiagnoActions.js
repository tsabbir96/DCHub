import axios from "axios";

//###########################################
//UPDATE diagnoStatus
//###########################################
export const update_diagno_status = async (
    id,
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
  
      const body = JSON.stringify({ status });
  
      try {
        return await axios.patch(`/submissions/diagnobots/${id}/`, body, config);
  
      } catch (err) {
  
        
         return err;
      }
    } else {
      return "Login error";
    }
  };
  
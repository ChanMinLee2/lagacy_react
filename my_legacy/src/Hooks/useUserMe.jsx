import React, { useEffect } from "react";
import { axiosInstance } from "../api/apiConstants";
import axios from "axios";

function useUserMe() {
  useEffect(() => {
    async function userMe() {
      try {
        // const meURL = url + `/user/${localStorage.getItem("userID")}`;/
        const users = await axiosInstance.get(
          "/user/" + localStorage.getItem("userID")
        );
        // const users = await axios.get(meURL, config);
        const userInfo = await users.data;
        console.log(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    userMe();
  }, []);

  return;
}

export default useUserMe;

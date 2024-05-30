import React, { useEffect } from "react";
import { axiosInstance } from "../api/apiConstants";
import axios from "axios";

function useUserMe(userID) {
  useEffect(() => {
    async function userMe(userID) {
      try {
        const users = await axiosInstance.get("/user/" + userID);
        const userInfo = await users.data;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    userMe(userID);
  }, [userID]);
  return localStorage.getItem("userInfo");
}

export default useUserMe;

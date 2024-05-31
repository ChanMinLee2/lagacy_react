import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/apiConstants";
import axios from "axios";

function useUserMe(userID) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function userMe(userID) {
      setLoading(true);
      try {
        const users = await axiosInstance.get("/user/" + userID);
        const userInfo = await users.data;
        setUserInfo(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }

    if (userID !== undefined) {
      userMe(userID);
    }
  }, [userID]);
  // return {localStorage.getItem("userInfo")}
  return { userInfo, loading };
}

export default useUserMe;

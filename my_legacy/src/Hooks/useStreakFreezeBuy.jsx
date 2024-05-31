import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useStreakFreezeBuy(amount) {
  // const [examRes, setExamRes] = useState();

  useEffect(() => {
    async function toggle(amount) {
      try {
        const buying = await axiosInstance.post(`/user/9/buy/freeze`, {
          amount: amount,
        });
        localStorage.setItem("userInfo", JSON.stringify(buying.data));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    toggle(amount);
  }, [amount]);
  return localStorage.getItem("userInfo");
}

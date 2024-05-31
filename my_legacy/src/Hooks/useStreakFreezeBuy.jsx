import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useStreakFreezeBuy(amount) {
  // const [examRes, setExamRes] = useState();

  useEffect(() => {
    async function toggle(amount) {
      try {
        const buying = await axiosInstance.post(`/streak/freeze`, {
          amount: amount,
        });
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    toggle(amount);
  }, [amount]);
  return;
}

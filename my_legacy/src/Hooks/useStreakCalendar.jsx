import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useStreakCalendar(userId) {
  // const [examRes, setExamRes] = useState();

  useEffect(() => {
    async function calender(userId) {
      try {
        const buying = await axiosInstance.get(`/streak/calendar` + userId);
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    calender(userId);
  }, [userId]);
  return;
}

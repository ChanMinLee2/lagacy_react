import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useStreakCalendar(userId) {
  const [calendar, setCalendar] = useState();
  const [calendarLoading, setCalendarLoading] = useState();

  useEffect(() => {
    async function calendar(userId) {
      setCalendarLoading(true);
      try {
        const buying = await axiosInstance.get(`/user/9/calendar`);
        const data = await buying.data;
        setCalendar(data);
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setCalendarLoading(false);
      }
    }

    calendar(userId);
  }, [userId]);
  return { calendar, calendarLoading };
}

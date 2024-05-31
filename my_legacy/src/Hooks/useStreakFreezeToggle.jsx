import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useStreakFreezeToggle(activate) {
  // const [examRes, setExamRes] = useState();

  useEffect(() => {
    async function toggle(activate) {
      try {
        const toggled = await axiosInstance.patch(`/user/9`, {
          freeze_activated: activate,
        });
        const toggled_data = await toggled.data;
        localStorage.setItem(toggled_data);
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    toggle(activate);
  }, [activate]);
  return;
}

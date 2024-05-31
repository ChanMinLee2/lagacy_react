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
        let new_data = localStorage.getItem("userInfo");
        new_data = { ...new_data, freeze_activated: toggled_data };
        localStorage.setItem("userInfo", JSON.stringify(new_data));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    toggle(activate);
  }, [activate]);
  return;
}

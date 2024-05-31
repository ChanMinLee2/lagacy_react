import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useStreakFreezeToggle(activate) {
  // const [examRes, setExamRes] = useState();

  useEffect(() => {
    async function toggle(activate) {
      try {
        const toggled = await axiosInstance.patch(`/streak/freeze`, {
          activate: activate,
        });
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    toggle(activate);
  }, [activate]);
  return;
}

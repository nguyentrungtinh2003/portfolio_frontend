import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "./URL";

const APISkill = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/skill/all`)
      .then((response) => {
        setSkill(response.data.data);
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  }, []);

  return skill;
};

export default APISkill;
import axios from "axios";
import React, { useEffect, useState } from "react";

const APISkill = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/skill/all`)
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

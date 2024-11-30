import axios from "axios";
import React, { useEffect, useState } from "react";
import URL from "./URL";

const APIProject = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/project/all`)
      .then((response) => {
        setProject(response.data.data);
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  }, []);

  return project;
};

export default APIProject;

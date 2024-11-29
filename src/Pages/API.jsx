import axios from "axios";
import React, { useEffect, useState } from "react";

const API = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/byName/Trung Tinh`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  }, []);

  return user;
};

export default API;

import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import { Card, Container, Row, Col, ListGroup, Badge } from "react-bootstrap";

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    address: "",
    fullName: "",
    position: "",
    university: "",
    birthDay: "",
    hobby: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${URL}/user/${id}`).then((response) => {
      const data = response.data.data;
      if (data) {
        setUserData({
          username: data.username || "",
          password: data.password || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          address: data.address || "",
          fullName: data.fullName || "",
          position: data.position || "",
          university: data.university || "",
          birthDay: data.birthDay || "",
          hobby: data.hobby || "",
        });
        setImage(data.img || null);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData
    const formData = new FormData();

    // Append user data as a JSON string blob
    formData.append(
      "user",
      new Blob(
        [
          JSON.stringify({
            username: userData.username,
            password: userData.password,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            address: userData.address,
            fullName: userData.fullName,
            position: userData.position,
            university: userData.university,
            birthDay: userData.birthDay,
            hobby: userData.hobby,
          }),
        ],
        { type: "application/json" }
      )
    );

    // Append image if it exists
    if (image) {
      formData.append("img", image);
    }

    try {
      const response = await axios.put(`${URL}/user/${id}`, formData);
      toast.success("Cập nhật thành công!", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
      setTimeout(() => {
        location.replace("/dashboard");
      }, 3000);
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Error updating user. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-100">
      <ToastContainer />
      <Card.Header className="text-center bg-primary text-white">
        <h3>Update User</h3>
      </Card.Header>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {Object.keys(userData).map((key) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key === "birthDay" ? "date" : "text"}
              className="form-control"
              id={key}
              name={key}
              value={userData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            id="img"
            name="img"
            onChange={handleImageChange}
          />
          {image && (
            <img
              src={image}
              alt="Profile"
              className="img-fluid rounded-circle mt-2"
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;

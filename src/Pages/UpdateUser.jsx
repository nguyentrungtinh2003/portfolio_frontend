import React, { useState } from "react";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";

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

    // Tạo FormData để gửi dữ liệu
    const formData = new FormData();

    // Thêm từng trường của userData vào formData
    formData.append("username", userData.username);
    formData.append("password", userData.password);
    formData.append("email", userData.email);
    formData.append("phoneNumber", userData.phoneNumber);
    formData.append("address", userData.address);
    formData.append("fullName", userData.fullName);
    formData.append("position", userData.position);
    formData.append("university", userData.university);
    formData.append("birthDay", userData.birthDay);
    formData.append("hobby", userData.hobby);

    // Thêm ảnh nếu có
    if (image) {
      formData.append("img", image);
    }

    try {
      const response = await axios.put(`${URL}/user/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update User Information</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            name="position"
            value={userData.position}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="university" className="form-label">
            University
          </label>
          <input
            type="text"
            className="form-control"
            id="university"
            name="university"
            value={userData.university}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="birthDay" className="form-label">
            Birth Day
          </label>
          <input
            type="date"
            className="form-control"
            id="birthDay"
            name="birthDay"
            value={userData.birthDay}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hobby" className="form-label">
            Hobby
          </label>
          <input
            type="text"
            className="form-control"
            id="hobby"
            name="hobby"
            value={userData.hobby}
            onChange={handleChange}
          />
        </div>
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
        </div>
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;

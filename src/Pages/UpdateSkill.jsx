import React, { useState } from "react";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";

const UpdateSkill = () => {
  const { id } = useParams();
  const userID = parseInt(localStorage.getItem("userID"));
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    user: { id: userID },
  });
  const [img, setImg] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  // Check if userID exists
  if (!userID) {
    setResponseMessage("User not found. Please login again.");
    return;
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file upload
  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      level,
      user: { id: userID },
    } = formData;

    // Create a FormData object for the multipart request
    const data = new FormData();
    // data.append("skill", JSON.stringify({ name, level, user: { id: userID } }));
    data.append(
      "skill",
      new Blob([JSON.stringify({ name, level, user: { id: userID } })], {
        type: "application/json",
      })
    );
    if (img) data.append("img", img);

    console.log(data);

    try {
      const response = await axios.put(`${URL}/skill/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Skill</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Skill Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">
            Skill Level
          </label>
          <input
            type="text"
            className="form-control"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="img"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Skill
        </button>
      </form>
      {responseMessage && (
        <div className="mt-3 alert alert-info">{responseMessage}</div>
      )}
    </div>
  );
};

export default UpdateSkill;

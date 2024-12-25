import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import { Card, Container, Row, Col, ListGroup, Badge } from "react-bootstrap";

const UpdateProject = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    technology: "",
    githubLink: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${URL}/project/${id}`).then((response) => {
      const data = response.data.data;
      if (data) {
        setProjectData({
          name: data.name || "",
          description: data.description || "",
          startDate: data.startDate || "",
          endDate: data.endDate || "",
          status: data.status || "",
          technology: data.technology || "",
          githubLink: data.githubLink || "",
        });
        setImage(data.img || null);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
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

    // Append project data as a JSON string blob
    formData.append(
      "project",
      new Blob(
        [
          JSON.stringify({
            name: projectData.name,
            description: projectData.description,
            startDate: projectData.startDate,
            endDate: projectData.endDate,
            status: projectData.status,
            technology: projectData.technology,
            githubLink: projectData.githubLink,
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
      const response = await axios.put(`${URL}/project/${id}`, formData);
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
      setMessage("Error updating project. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-100">
      <ToastContainer />
      <Card.Header className="text-center bg-primary text-white">
        <h3>Update Project</h3>
      </Card.Header>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {Object.keys(projectData).map((key) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key.includes("Date") ? "date" : "text"}
              className="form-control"
              id={key}
              name={key}
              value={projectData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Project Image
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
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt="Project"
              className="img-fluid rounded mt-2"
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;

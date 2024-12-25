import React, { useState } from "react";
import axios from "axios";
import { Form, Button, ListGroup, Container, Row, Col } from "react-bootstrap";
import URL from "./URL";
import { ToastContainer, toast, Slide } from "react-toastify";
const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [technology, setTechnology] = useState("");
  const [githubLinks, setGithubLinks] = useState([]);
  const [currentGithubLink, setCurrentGithubLink] = useState("");
  const [img, setImg] = useState(null);

  const userID = parseInt(localStorage.getItem("userID"));

  const handleAddGithubLink = () => {
    if (currentGithubLink.trim()) {
      setGithubLinks([...githubLinks, currentGithubLink]);
      setCurrentGithubLink(""); // Clear the input field
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Tạo đối tượng project
    const project = {
      name,
      description,
      startDate,
      endDate,
      status,
      technology,
      githubLink: githubLinks.join(","),
      user: { id: userID },
    };

    // Thêm đối tượng project vào formData (Dưới dạng JSON)
    formData.append(
      "project",
      new Blob([JSON.stringify(project)], { type: "application/json" })
    );

    // Thêm ảnh vào formData (Kiểm tra nếu có ảnh)
    if (img) {
      formData.append("img", img);
    }

    try {
      const response = await axios.post(`${URL}/project/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Thêm dự án thành công!", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
      setTimeout(() => {
        location.replace("/dashboard");
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Thêm dự án không thành công !", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-100">
      <ToastContainer />
      <Row className="w-100">
        <Col md={8} lg={6} className="mx-auto">
          <h2 className="text-center mb-4">Add New Project</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter project description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Technology</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project technology"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>GitHub Links</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter a GitHub link"
                value={currentGithubLink}
                onChange={(e) => setCurrentGithubLink(e.target.value)}
              />
              <Button
                variant="secondary"
                onClick={handleAddGithubLink}
                className="mt-2"
              >
                Add Link
              </Button>
              <ListGroup className="mt-2">
                {githubLinks.map((link, index) => (
                  <ListGroup.Item key={index}>{link}</ListGroup.Item>
                ))}
              </ListGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Add Project
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProject;

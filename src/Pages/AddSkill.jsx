import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // Import thêm Container, Row, Col
import URL from "./URL";
import { ToastContainer, toast, Slide } from "react-toastify";
const AddSkill = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [img, setImg] = useState(null);
  const userID = parseInt(localStorage.getItem("userID"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const skill = {
      name,
      level,
      user: {
        id: userID,
      },
    };

    formData.append(
      "skill",
      new Blob([JSON.stringify({ name, level, user: { id: userID } })], {
        type: "application/json",
      })
    );
    formData.append("img", img);

    try {
      const response = await axios.post(`${URL}/skill/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Thêm kĩ năng thành công!", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
      setTimeout(() => {
        location.replace("/dashboard");
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Thêm kĩ năng không thành công !", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ToastContainer />
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Add New Skill</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Skill Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter skill name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter skill level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                required
              />
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
              Add Skill
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSkill;

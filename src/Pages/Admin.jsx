import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  Nav,
} from "react-bootstrap";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [showModal, setShowModal] = useState(false);

  // Sample data
  const users = [
    {
      id: 1,
      username: "john_doe",
      fullName: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      birthDay: "1990-01-01",
      university: "University A",
      hobby: "Photography",
    },
    {
      id: 2,
      username: "jane_smith",
      fullName: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "987-654-3210",
      address: "456 Elm St",
      birthDay: "1992-02-02",
      university: "University B",
      hobby: "Reading",
    },
  ];

  const skills = [
    { id: 1, name: "JavaScript", img: "js.png", level: "Advanced" },
    { id: 2, name: "React", img: "react.png", level: "Intermediate" },
  ];

  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio site",
      technology: "React, Node.js",
      githubLink: "https://github.com/portfolio",
      startDate: "2023-01-01",
      endDate: "2023-06-01",
      status: "Completed",
      img: "portfolio.png",
    },
    {
      id: 2,
      name: "E-commerce App",
      description: "A full-stack e-commerce application",
      technology: "React, Spring Boot",
      githubLink: "https://github.com/ecommerce-app",
      startDate: "2023-02-01",
      endDate: "2023-08-01",
      status: "Ongoing",
      img: "ecommerce.png",
    },
  ];

  // Handle Modal open/close
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Render content based on selected tab
  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <>
            <h4>Manage Users</h4>
            <Button variant="primary" onClick={handleShow}>
              Add User
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Full Name</th>
                  <th>Img</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.fullName}</td>
                    <td>
                      {" "}
                      <img
                        src={user.profileImg}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.address}</td>
                    <td>
                      <Button variant="warning" className="me-2">
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      case "skills":
        return (
          <>
            <h4>Manage Skills</h4>
            <Button variant="primary" onClick={handleShow}>
              Add Skill
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill.id}>
                    <td>{skill.id}</td>
                    <td>{skill.name}</td>
                    <td>{skill.level}</td>
                    <td>
                      <Button variant="warning" className="me-2">
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      case "projects":
        return (
          <>
            <h4>Manage Projects</h4>
            <Button variant="primary" onClick={handleShow}>
              Add Project
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Technology</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.technology}</td>
                    <td>{project.status}</td>
                    <td>
                      <Button variant="warning" className="me-2">
                        Edit
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        );
      default:
        return <p>Select an option from the menu.</p>;
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Left Navbar */}
        <Col md={2} className="bg-light vh-100">
          <h5 className="text-center py-3">Admin Menu</h5>
          <Nav className="flex-column">
            <Nav.Link
              className={activeTab === "users" ? "active" : ""}
              onClick={() => setActiveTab("users")}
            >
              Manage Users
            </Nav.Link>
            <Nav.Link
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Manage Skills
            </Nav.Link>
            <Nav.Link
              className={activeTab === "projects" ? "active" : ""}
              onClick={() => setActiveTab("projects")}
            >
              Manage Projects
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          {renderContent()}
        </Col>
      </Row>

      {/* Modal Form */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Admin;

import React, { useEffect, useState } from "react";
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
import APISkill from "./APISkill";
import APIProject from "./APIProject";
import API from "./API";
import { ToastContainer, toast, Slide } from "react-toastify";
const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState({}); // Trạng thái người dùng
  const [skill, setSkill] = useState([]); // Trạng thái kỹ năng
  const [project, setProject] = useState([]); // Trạng thái dự án

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chờ đợi dữ liệu từ API
        const userData = await API();
        const skillData = await APISkill();
        const projectData = await APIProject();

        // Cập nhật trạng thái khi nhận được dữ liệu
        setUser(userData);
        setSkill(skillData);
        setProject(projectData);

        // Debug log để xem dữ liệu
        console.log(userData);
        console.log(skillData);
        console.log(projectData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData(); // Gọi hàm fetchData khi component mount
  }, []); // Chạy một lần khi component render lần đầu tiên

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
            <a href="/addUser">
              <Button variant="primary">
                <i className="fas fa-plus"></i>
              </Button>
            </a>
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
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.fullName}</td>
                  <td>
                    {" "}
                    <img
                      src={user.img}
                      alt="Profile"
                      className="img-fluid rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td>{user.position}</td>
                  <td>
                    <a href={`/viewUser/${user.id}`}>
                      <button variant="warning" className="me-2">
                        <i className="fas fa-eye"></i>
                      </button>
                    </a>
                    <a href={`/updateUser/${user.id}`}>
                      <button variant="warning" className="me-2">
                        <i className="fas fa-edit"></i>
                      </button>
                    </a>
                    <Button variant="danger">
                      {" "}
                      <i className="fas fa-trash"></i>{" "}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      case "skills":
        return (
          <>
            <h4>Manage Skills</h4>
            <a href="/addSkill">
              <Button variant="primary">
                <i className="fas fa-plus"></i>
              </Button>
            </a>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Img</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {skill &&
                  skill.map((ski) => (
                    <tr key={ski.id}>
                      <td>{ski.id}</td>
                      <td>{ski.name}</td>
                      <td>{ski.level}</td>
                      <td>
                        {" "}
                        <img
                          src={ski.img}
                          alt="skill"
                          className="img-fluid rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>
                        <a href={`/viewSkill/${ski.id}`}>
                          <button variant="warning" className="me-2">
                            <i className="fas fa-eye"></i>
                          </button>
                        </a>
                        <a href={`/updateSkill/${ski.id}`}>
                          <button variant="warning" className="me-2">
                            <i className="fas fa-edit"></i>
                          </button>
                        </a>

                        <Button variant="danger">
                          {" "}
                          <i className="fas fa-trash"></i>{" "}
                        </Button>
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
            <a href="/addProject">
              <Button variant="primary">
                <i className="fas fa-plus"></i>
              </Button>
            </a>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Technology</th>
                  <th>Status</th>
                  <th>Img</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {project.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.technology}</td>
                    <td>{project.status}</td>
                    <td>
                      {" "}
                      <img
                        src={project.img}
                        alt="Profile"
                        className="img-fluid rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>
                      <a href={`/viewProject/${project.id}`}>
                        <button variant="warning" className="me-2">
                          <i className="fas fa-eye"></i>
                        </button>
                      </a>
                      <a href={`/updateProject/${project.id}`}>
                        <button variant="warning" className="me-2">
                          <i className="fas fa-edit"></i>
                        </button>
                      </a>
                      <Button variant="danger">
                        {" "}
                        <i className="fas fa-trash"></i>{" "}
                      </Button>
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

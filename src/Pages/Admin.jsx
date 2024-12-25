import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Nav,
} from "react-bootstrap";
import APISkill from "./APISkill";
import APIProject from "./APIProject";
import API from "./API";
import { ToastContainer, toast, Slide } from "react-toastify";
import axios from "axios";
import URL from "./URL";
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

  const handelDeleteUser = (id, name) => {
    const conf = window.confirm(`Bạn có muốn xoá người dùng ${name} không ?`);
    if (conf) {
      axios
        .delete(`${URL}/user/${id}`)
        .then((response) => {
          toast.success("Xoá người dùng thành công!", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
          });
          console.log(response);
          setTimeout(() => {
            window.location.replace("/dashboard");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error deleting user", error);
          toast.error("Xoá người dùng thất bại !", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
          });
        });
    }
  };

  const handelDeleteSkill = (id, name) => {
    const conf = window.confirm(`Bạn có muốn xoá kĩ năng ${name} không ?`);
    if (conf) {
      axios
        .delete(`${URL}/skill/${id}`)
        .then((response) => {
          toast.success("Xoá kĩ năng thành công!", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
          });
          console.log(response);
          setTimeout(() => {
            window.location.replace("/dashboard");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error deleting user", error);
          toast.error("Xoá kĩ năng thất bại !", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
          });
        });
    }
  };

  const handelDeleteProject = (id, name) => {
    const conf = window.confirm(`Bạn có muốn xoá dự án ${name} không ?`);
    if (conf) {
      axios
        .delete(`${URL}/project/${id}`)
        .then((response) => {
          toast.success("Xoá dự án thành công!", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
          });
          console.log(response);
          setTimeout(() => {
            window.location.replace("/dashboard");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error deleting user", error);
          toast.error("Xoá dự án thất bại !", {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
          });
        });
    }
  };

  // Render content based on selected tab
  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <>
            <h4 className="mt-100">Manage Users</h4>
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
                    <button className="btn btn-info me-2">
                      <a
                        href={`/viewUser/${user.id}`}
                        style={{ color: "white" }}
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </button>
                    <button className="btn btn-warning me-2">
                      <a
                        href={`/updateUser/${user.id}`}
                        style={{ color: "white" }}
                      >
                        <i className="fas fa-edit"></i>
                      </a>
                    </button>
                    <Button
                      variant="danger"
                      onClick={() => handelDeleteUser(user.id, user.username)}
                    >
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
            <h4 className="mt-100">Manage Skills</h4>
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
                      <td>
                        <Badge>{ski.level}</Badge>
                      </td>
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
                        <button className="btn btn-info me-2">
                          <a
                            href={`/viewSkill/${ski.id}`}
                            style={{ color: "white" }}
                          >
                            <i className="fas fa-eye"></i>
                          </a>
                        </button>
                        <button className="btn btn-warning me-2">
                          <a
                            href={`/updateSkill/${ski.id}`}
                            style={{ color: "white" }}
                          >
                            <i className="fas fa-edit"></i>
                          </a>
                        </button>

                        <Button
                          variant="danger"
                          onClick={() => handelDeleteSkill(ski.id, ski.name)}
                        >
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
            <h4 className="mt-100">Manage Projects</h4>
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
                    <td>
                      <Badge>{project.status}</Badge>
                    </td>
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
                      <button className="btn btn-info me-2">
                        <a
                          href={`/viewProject/${project.id}`}
                          style={{ color: "white" }}
                        >
                          <i className="fas fa-eye"></i>
                        </a>
                      </button>
                      <button className="btn btn-warning me-2">
                        <a
                          href={`/updateProject/${project.id}`}
                          style={{ color: "white" }}
                        >
                          <i className="fas fa-edit"></i>
                        </a>
                      </button>
                      <Button
                        variant="danger"
                        onClick={() =>
                          handelDeleteProject(project.id, project.name)
                        }
                      >
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
          <h5 className="text-center py-3 mt-100">Admin Menu</h5>
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
    </Container>
  );
};

export default Admin;

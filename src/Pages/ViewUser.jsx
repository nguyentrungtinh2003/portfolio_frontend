import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data by ID
    axios
      .get(`${URL}/user/${id}`)
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  if (!userData) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-100 col-12">
      <Card className="shadow-lg">
        <Card.Header className="text-center bg-primary text-white py-4">
          <h3>User Profile</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* User Info Section */}
            <Col md={4} className="text-center">
              <img
                src={userData.img}
                alt={userData.username}
                className="img-fluid rounded-circle shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h4 className="mt-3">{userData.fullName}</h4>
              <p className="text-muted">{userData.position}</p>
              <Badge bg="secondary" className="px-3 py-2 mt-2">
                User ID: {id}
              </Badge>
            </Col>

            {/* Details Section */}
            <Col md={8}>
              <h5 className="text-primary mb-3">Basic Information</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Username:</strong> {userData.username}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {userData.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> {userData.phoneNumber}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Address:</strong> {userData.address}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Birth Day:</strong> {userData.birthDay}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>University:</strong> {userData.university}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Hobby:</strong> {userData.hobby}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          {/* Skills and Projects Section */}
          <Row className="mt-5">
            <Col md={6}>
              <h5 className="text-primary mb-3">Skills</h5>
              <ListGroup>
                {userData.skills.map((skill) => (
                  <ListGroup.Item
                    key={skill.id}
                    className="d-flex align-items-center shadow-sm rounded mb-2"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="img-fluid rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "15px",
                      }}
                    />
                    <div>
                      <strong>{skill.name}</strong>
                      <br />
                      <Badge bg="info">{skill.level}</Badge>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            <Col md={6}>
              <h5 className="text-primary mb-3">Projects</h5>
              <ListGroup>
                {userData.projects.map((project) => (
                  <ListGroup.Item
                    key={project.id}
                    className="shadow-sm rounded mb-2"
                  >
                    <h6>{project.name}</h6>
                    <p className="text-muted mb-1">{project.description}</p>
                    <small>
                      <strong>Tech:</strong> {project.technology}
                    </small>
                    <br />
                    <small>
                      <strong>Duration:</strong> {project.startDate} -{" "}
                      {project.endDate}
                    </small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewUser;

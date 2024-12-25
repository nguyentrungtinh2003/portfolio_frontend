import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";

const ViewProject = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Fetch project data by ID
    axios
      .get(`${URL}/project/${id}`)
      .then((response) => {
        setProjectData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, [id]);

  if (!projectData) {
    return <p>Loading...</p>;
  }

  const githubLinks = projectData.githubLink.split(",").map((link, index) => (
    <li key={index}>
      <a href={link.trim()} target="_blank" rel="noopener noreferrer">
        <FaGithub></FaGithub> {link.trim()}
      </a>
    </li>
  ));

  return (
    <Container className="mt-100">
      <Card>
        <Card.Header className="bg-primary text-white text-center">
          <h3>Project Details</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img
                src={projectData.img}
                alt={projectData.name}
                className="img-fluid rounded"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <h4>{projectData.name}</h4>
              <p>
                <strong>Description:</strong> {projectData.description}
              </p>
              <p>
                <strong>Technology:</strong> {projectData.technology}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <Badge
                  bg={projectData.status === "In_Progress" ? "info" : "success"}
                >
                  {projectData.status}
                </Badge>
              </p>
              <p>
                <strong>Duration:</strong> {projectData.startDate} -{" "}
                {projectData.endDate}
              </p>
              <p>
                <strong>GitHub Links:</strong>
                <ul>{githubLinks}</ul>
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h5>Skills Used:</h5>
              <ListGroup>
                {projectData.skills.map((skill) => (
                  <ListGroup.Item
                    key={skill.id}
                    className="d-flex align-items-center"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="me-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <div>
                      <strong>{skill.name}</strong> - {skill.level}
                    </div>
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

export default ViewProject;

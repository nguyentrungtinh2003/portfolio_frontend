import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import axios from "axios";
import URL from "./URL";
import { useParams } from "react-router-dom";

const ViewSkill = () => {
  const { id } = useParams();
  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    // Fetch skill data by ID
    axios
      .get(`${URL}/skill/${id}`)
      .then((response) => {
        setSkillData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching skill data:", error);
      });
  }, [id]);

  if (!skillData) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-100">
      <Card className="text-center">
        <Card.Header className="bg-primary text-white">
          <h3>Skill Details</h3>
        </Card.Header>
        <Card.Body>
          <Row className="align-items-center">
            <Col md={4}>
              <img
                src={skillData.img}
                alt={skillData.name}
                className="img-fluid rounded"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <h4>{skillData.name}</h4>
              <Badge bg="info" className="fs-6">
                {skillData.level}
              </Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewSkill;

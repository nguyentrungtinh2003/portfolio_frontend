import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const AddProject = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [technology, setTechnology] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [userId, setUserId] = useState("");
    const [img, setImg] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        const project = {
            name,
            description,
            startDate,
            endDate,
            status,
            technology,
            githubLink,
            user: {
                id: userId,
            },
        };

    
        formData.append("project", new Blob([JSON.stringify(project)], { type: "application/json" }));
        formData.append("img", img);

        try {
            const response = await axios.post("http://localhost:8080/project/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            alert("Project added successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to add project.");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
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

            <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter project status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Technology</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter project technology"
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Github Link</Form.Label>
                <Form.Control
                    type="url"
                    placeholder="Enter GitHub link"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>User ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter user ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Project
            </Button>
        </Form>
    );
};

export default AddProject;

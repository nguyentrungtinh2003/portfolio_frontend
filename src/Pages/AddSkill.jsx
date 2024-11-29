import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const AddSkill = () => {
    const [name, setName] = useState("");
    const [level, setLevel] = useState("");
    const [userId, setUserId] = useState("");
    const [img, setImg] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        const skill = {
            name,
            level,
            user: {
                id: userId,
            },
        };

       
        formData.append("skill", new Blob([JSON.stringify(skill)], { type: "application/json" }));
         formData.append("img", img);

        try {
            const response = await axios.post("http://localhost:8080/skill/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            alert("Skill added successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to add skill.");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Skill Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter skill name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Level</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter skill level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    required
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
                Add Skill
            </Button>
        </Form>
    );
};

export default AddSkill;

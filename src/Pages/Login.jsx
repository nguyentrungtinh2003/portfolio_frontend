import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import URL from "./URL";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Dùng để hiển thị lỗi nếu có
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dữ liệu gửi đi trong request body
    const user = {
      username,
      password,
    };

    try {
      // Gửi yêu cầu POST đến API login
      const response = await axios.post(`${URL}/user/login`, user);

      // Kiểm tra kết quả trả về và thực hiện các hành động sau khi đăng nhập thành công
      console.log("Login successful", response.data);
      toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);

      if (response.data.token) {
        localStorage.setItem("userID", response.data.data.id);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("img", response.data.data.img);

        console.log(localStorage.getItem("img"));
      }
      if (response.data.status === 500) {
        toast.error("Username hoặc password không đúng !", {
          position: "top-right",
          autoClose: 3000,
          transition: Slide,
        });
      }
      // Có thể lưu token hoặc thông tin người dùng vào localStorage/sessionStorage nếu cần
    } catch (err) {
      console.error("Login failed", err);
      toast.error("Lỗi khi đăng nhập !", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <ToastContainer />
      <Row>
        <Col>
          <Card className="p-4 shadow-sm" style={{ maxWidth: "400px" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Lưu giá trị email vào state
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Lưu giá trị password vào state
                  />
                </Form.Group>
                {error && (
                  <div className="text-danger text-center">{error}</div>
                )}{" "}
                {/* Hiển thị lỗi nếu có */}
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

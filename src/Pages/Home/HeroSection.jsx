import { useEffect, useState } from "react";
import API from "../API";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaCertificate,
  FaFileAlt,
  FaDocker,
} from "react-icons/fa";

export default function HeroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await API();
        setUser(userData);
      } catch (error) {
        console.error("Lỗi tải user:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="bg-dark text-warning min-vh-100 d-flex justify-content-center align-items-center">
        <h4>Đang tải thông tin...</h4>
      </div>
    );
  }

  return (
    <section id="heroSection" className="bg-dark text-warning py-5 mt-100">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Cột nội dung - bên trái */}
          <div className="col-lg-7 text-center text-lg-start order-2 order-lg-1">
            <h1 className="fw-bold display-5 text-warning mb-2">
              {user.position} Developer
            </h1>
            <h3 className="fw-bold text-white mb-3">{user.fullName}</h3>

            <p className="mb-2 text-light">
              📍 <strong>{user.address}</strong> &nbsp; | &nbsp; 🎓{" "}
              <strong>{user.university}</strong> &nbsp; | &nbsp; 🗓{" "}
              <strong>{user.birthDay}</strong>
            </p>
          <p className="mb-2">
            <span className="text-info fw-semibold">Backend Intern | Kyanon Digital</span>
            {" "}
            <span className="text-info fw-semibold">03/2025 - 06/2025</span>
          </p>
            <p className="mb-2 text-light">
              📧 <strong>Email:</strong> {user.email}
              <br />
              📞 <strong>Phone:</strong> {user.phoneNumber}
            </p>

            {/* Nút hành động */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
              <a
                href="https://github.com/nguyentrungtinh2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <button className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 shadow-sm">
                  <FaGithub size={18} /> GitHub
                </button>
              </a>

              <a
                href="https://hub.docker.com/repositories/nguyentrungtinh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <button className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 shadow-sm">
                  <FaDocker size={18} /> DockerHub
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/nguyen-trung-tinh-513a70337/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <button className="btn btn-info d-flex align-items-center gap-2 px-3 py-2 shadow-sm">
                  <FaLinkedin size={18} /> LinkedIn
                </button>
              </a>

              <a
                href="/NguyenTrungTinh_EntryLevelBackend_CV.pdf"
                className="text-decoration-none"
              >
                <button className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 shadow-sm">
                  <FaFileAlt size={18} /> CV
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/1erMnxXiBd4CfFQOSTjEkHj0utXhSk63T/view?usp=sharing"
                className="text-decoration-none"
              >
                <button className="btn btn-warning d-flex align-items-center gap-2 px-3 py-2 shadow-sm">
                  <FaCertificate size={18} />
                  Oracle Certificate
                </button>
              </a>
            </div>
          </div>

          {/* Cột hình ảnh - bên phải */}
          <div className="col-lg-5 mb-4 mb-lg-0 text-center order-1 order-lg-2">
            <img
              src="./img3.jpg"
              alt="Hero Section"
              className="img-fluid shadow"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

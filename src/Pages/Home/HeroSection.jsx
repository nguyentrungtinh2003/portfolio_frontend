import { useEffect, useState } from "react";
import API from "../API";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast, Slide } from "react-toastify";
export default function HeroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Gọi API và lấy dữ liệu người dùng
        const userData = await API();
        setUser(userData);
      } catch (error) {}
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section id="heroSection" className="container py-5 mt-100">
        <div className="row align-items-center">
          {/* Nội dung chính */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold">{user.fullName}</h2>
            <h1 className="display-4 fw-bold text-primary">
              Java {user.position} Developer
            </h1>
            <p className="mt-3">
              Born in <strong>{user.birthDay}</strong> in the vibrant city of{" "}
              <strong>{user.address}</strong>, currently pursuing a degree at
              the prestigious <strong>{user.university}</strong> in{" "}
              <strong>IT</strong>.
            </p>
            <p className="mt-3">
              Feel free to connect: <br />
              <strong>Email:</strong> {user.email} | <strong>Phone:</strong>{" "}
              {user.phoneNumber}
            </p>
            <a
              href="https://github.com/nguyentrungtinh2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <button className="btn btn-dark d-flex align-items-center gap-2">
                <FaGithub size={24} /> Visit My GitHub
              </button>
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/nguyen-trung-tinh-513a70337/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <button className="btn btn-primary d-flex align-items-center gap-2">
                <FaLinkedin size={24} /> Visit My Linkedin
              </button>
            </a>
            <br></br>
            <a
              href="/SE - Nguyen Trung Tinh.pdf"
              download="SE - Nguyen Trung Tinh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <button className="btn btn-danger d-flex align-items-center gap-2">
                <FaDownload /> Download CV
              </button>
            </a>
          </div>

          {/* Hình ảnh */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={user.img}
              alt="Hero Section"
              className="img-fluid rounded shadow project-img"
              style={{ maxWidth: "400px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import API from "../API";
import img2 from "/img2.png";

export default function AboutMe() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await API();
      setUser(userData);
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <section
        className="d-flex justify-content-center align-items-center bg-dark text-white"
        style={{ minHeight: "100vh" }}
      >
        <h4 className="fs-4">Đang tải thông tin...</h4>
      </section>
    );
  }

  return (
    <section id="AboutMe" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Hình ảnh */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={img2}
              alt="About Me"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Nội dung */}
          <div className="col-md-6">
            <h1 className="fw-bold text-warning mb-4">About Me</h1>
            <div className="text-light">
              <p>
                Hello! I'm <strong>{user.fullName}</strong>, currently an intern
                in the position of <strong>{user.position}</strong> Developer.
                I'm passionate about building efficient, user-friendly, and
                scalable web applications.
              </p>
              <p>
                With a solid foundation in <strong>Java</strong> and{" "}
                <strong>Spring Boot</strong>, I focus on backend development and
                API design, working with <strong>MySQL</strong> to manage
                databases effectively and securely.
              </p>
              <p>
                On the frontend, I use <strong>React</strong> along with{" "}
                <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
                <strong>JavaScript</strong> to create beautiful, responsive, and
                user-friendly interfaces.
              </p>
              <p>
                I often participate in projects that integrate both frontend and
                backend, emphasizing clean, maintainable code and effective
                teamwork.
              </p>
              <p>
                Outside of work, I enjoy exploring new technologies, challenging
                myself with programming competitions, and aspire to become a
                full-stack developer in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

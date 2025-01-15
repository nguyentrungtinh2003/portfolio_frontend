import axios from "axios";
import { useEffect, useState } from "react";
import API from "../API";
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
    return <h4>Loading ...</h4>;
  }
  return (
    <section id="AboutMe" className="about-section bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Hình ảnh */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src="./img/img-2.png"
              alt="About Me"
              className="img-fluid shadow project-img"
              style={{ maxWidth: "300px" }}
            />
          </div>
          {/* Nội dung */}
          <div className="col-lg-6">
            <div>
              <h1 className="fw-bold text-primary mb-4">About Me</h1>
              <p className="text-muted">
                Hello! My name is <strong>{user.fullName}</strong>, and I am a
                passionate <strong>{user.position}</strong> Developer Intern
                with a focus on creating efficient, scalable, and user-friendly
                web applications. I thrive on solving complex problems and
                continuously improving my skills to stay updated with the latest
                technologies.
              </p>
              <p className="text-muted">
                I have a solid background in <strong>Java</strong> and{" "}
                <strong>Spring Boot</strong>, focusing on backend development
                and API design. I am also skilled in <strong>MySQL</strong> for
                relational database management and have experience working with
                large datasets, ensuring optimal performance and security.
              </p>
              <p className="text-muted">
                On the frontend side, I am proficient in <strong>React</strong>,{" "}
                <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
                <strong>JavaScript</strong>. I enjoy creating interactive and
                responsive web interfaces while maintaining a strong focus on
                user experience (UX) and design principles.
              </p>
              <p className="text-muted">
                Throughout my academic and internship experiences, I have worked
                on various projects involving both frontend and backend
                technologies. I am committed to writing clean, maintainable, and
                scalable code. I also value collaboration and teamwork, often
                participating in group projects and open-source contributions.
              </p>
              <p className="text-muted">
                When I'm not coding, I enjoy exploring new frameworks,
                participating in coding challenges, and staying involved in the
                developer community. My long-term goal is to become a full-stack
                developer and contribute to impactful projects that make a
                difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

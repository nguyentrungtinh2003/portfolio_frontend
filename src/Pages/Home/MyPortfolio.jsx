import { useState, useEffect } from "react";
import APIProject from "../APIProject";
import { FaGithub } from "react-icons/fa";

export default function MyPortfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await APIProject();
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <section id="MyProjects" className="portfolio-section bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">My Projects</h1>
        </div>
        <div className="text-center mb-4">
          <a
            href="https://github.com/nguyentrungtinh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <button className="btn btn-dark d-flex align-items-center gap-2 justify-content-center px-4 py-2">
              <FaGithub size={24} />
              <span className="fw-bold">Visit My GitHub</span>
            </button>
          </a>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((item, index) => {
            const githubLinksArray = item.githubLink
              ? item.githubLink.split(",").map((link) => link.trim())
              : [];

            return (
              <div key={index} className="col">
                <div className="skill-card card shadow-lg border-0 rounded-4 h-100">
                  <img
                    src={item.img}
                    alt={item.name || "Project Image"}
                    className="card-img-top rounded-top-4 img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-primary">
                      {item.name}
                    </h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {item.skills &&
                        item.skills.map((ski, skillIndex) => (
                          <div key={skillIndex} className="text-center">
                            <img
                              src={ski.img}
                              alt={ski.name}
                              className="img-fluid border shadow-sm"
                              style={{ maxWidth: "50px" }}
                            />
                            <p className="small text-muted mt-1">{ski.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center">
                    {githubLinksArray.map((link, linkIndex) => {
                      const isLinkFrontend = link
                        .toLowerCase()
                        .includes("frontend");
                      const btnText = isLinkFrontend
                        ? "Link Github Frontend"
                        : "Link Github Backend";

                      return (
                        <>
                          <a
                            key={linkIndex}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            <button className="btn btn-dark d-flex align-items-center gap-2 justify-content-center px-4 py-2 w-100">
                              <FaGithub size={24} />
                              <span className="fw-bold">{btnText}</span>
                            </button>
                          </a>
                          <br />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

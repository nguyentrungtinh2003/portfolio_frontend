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
    <section id="MyProjects" className="bg-dark text-warning py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5 text-warning">My Projects</h1>
          <p className="text-light fs-5">
            Some projects I’ve worked on during my learning and working journey.
          </p>
        </div>

        {/* GitHub Button */}
        <div className="text-center mb-5">
          <a
            href="https://github.com/nguyentrungtinh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <button className="btn btn-outline-warning d-flex align-items-center gap-2 justify-content-center px-4 py-2 mx-auto shadow-sm rounded-pill">
              <FaGithub size={24} />
              <span className="fw-bold">Visit My GitHub</span>
            </button>
          </a>
        </div>

        {/* Projects */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((item, index) => {
            const githubLinksArray = item.githubLink
              ? item.githubLink.split(",").map((link) => link.trim())
              : [];

            return (
              <div key={index} className="col">
                <div
                  className="card h-100 bg-black text-warning border-0 shadow-lg rounded-4"
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  <img
                    src={item.img}
                    alt={item.name || "Project"}
                    className="card-img-top rounded-top-4"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-warning">
                      {item.name}
                    </h5>
                    <p className="card-text text-light">{item.description}</p>

                    {item.skills?.length > 0 && (
                      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        {item.skills.map((ski, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="text-center d-flex flex-column align-items-center"
                          >
                            <img
                              src={ski.img}
                              alt={ski.name}
                              className="img-fluid border rounded shadow-sm"
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                              }}
                            />
                            <p className="small text-light mt-1">{ski.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* GitHub Links */}
                  {githubLinksArray.length > 0 && (
                    <div className="card-footer bg-transparent border-0 text-center px-4 pb-4">
                      {githubLinksArray.map((link, linkIndex) => {
                        const isFrontend = link
                          .toLowerCase()
                          .includes("frontend");
                        const btnText = isFrontend
                          ? "GitHub Frontend"
                          : "GitHub Backend";

                        return (
                          <a
                            key={linkIndex}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-block mb-2 text-decoration-none"
                          >
                            <button className="btn btn-outline-light d-flex align-items-center gap-2 justify-content-center w-100 rounded-pill shadow-sm">
                              <FaGithub size={20} />
                              <span className="fw-bold">{btnText}</span>
                            </button>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

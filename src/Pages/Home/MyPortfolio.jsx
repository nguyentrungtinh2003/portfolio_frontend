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
    <section className="portfolio-section bg-light" id="MyPortfolio">
      <div className="container">
        <div className="text-center mb-5">
          <p className="sub-title text-uppercase text-muted"></p>
          <h2 className="section-heading fw-bold">My Projects</h2>
        </div>
        <div className="text-center mb-4">
          <a href="https://github.com/nguyentrungtinh2003">
            <button className="btn btn-outline-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
              >
                {/* SVG Path */}
              </svg>
              <FaGithub className="m-2"></FaGithub>
              Visit My GitHub
            </button>
          </a>
        </div>
        <div className="row gy-4">
          {projects.map((item, index) => {
            const githubLinksArray = item.githubLink
              ? item.githubLink.split(",").map((link) => link.trim())
              : [];

            return (
              <div key={index} className="col-md-6 col-lg-4 skill-card">
                <div className="card shadow-sm h-100">
                  <img
                    src={item.img}
                    alt={item.name || "Placeholder"}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">{item.description}</p>
                    {item.skills &&
                      item.skills.map((ski, skillIndex) => (
                        <div key={skillIndex} className="mb-2">
                          <h6 className="mb-0">{ski.name}</h6>
                          <small className="text-muted m-2">{ski.level}</small>
                          <img
                            src={ski.img}
                            className="img-fluid mt-2 rounded"
                            alt={ski.name || "Skill"}
                            style={{ maxWidth: "50px" }}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="d-flex flex-wrap gap-2">
                      {githubLinksArray.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                        >
                          <FaGithub className="m-2"></FaGithub>
                          GitHub Link
                        </a>
                      ))}
                    </div>
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

import { useEffect, useState } from "react";
import APISkill from "../APISkill";
import { Badge } from "react-bootstrap";

export default function MySkills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await APISkill();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };
    fetchData();
  }, []);

  if (!Array.isArray(skills)) {
    console.error("Skills data is not an array:", skills);
    return null;
  }

  if (!skills) {
    return (
      <div className="text-center mt-5 bg-dark text-warning py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Đang tải kỹ năng...</p>
      </div>
    );
  }

  return (
    <section className="bg-dark text-warning py-5" id="mySkills">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-warning">My Skills</h1>
          <p className="text-light fs-5">
            The technologies and skills I’m currently using
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card h-100 border-0 shadow-sm rounded-4 bg-black text-warning"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <img
                  src={skill.img || "/default-skill-image.jpg"}
                  alt={skill.name || "Skill"}
                  className="card-img-top rounded-top-4"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderBottom: "4px solid #ffc107",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-2">
                    {skill.name || "No Name"}
                  </h5>
                  <Badge
                    bg="warning"
                    className="text-dark px-3 py-2 rounded-pill"
                  >
                    {skill.level}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

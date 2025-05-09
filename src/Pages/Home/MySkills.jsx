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
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Fetching skills...</p>
      </div>
    );
  }

  return (
    <section className="skills-section bg-light py-5" id="mySkills">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">My Skills</h1>
        </div>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card skill-card h-100 shadow border-0 rounded-4">
                <img
                  src={skill.img || "/default-skill-image.jpg"}
                  alt={skill.name || "Skill"}
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">
                    {skill.name || "No Name"}
                  </h5>
                  <Badge>{skill.level}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

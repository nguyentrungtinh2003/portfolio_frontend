import data from "../../data/index.json";
import APISkill from "../APISkill";

export default function MySkills() {
  const skill = APISkill();
  return (
    <section className="skills--section" id="mySkills">
      <div className="container">
        <p className="section--title text-center">My Skills</p>
        <h2 className="skills--title text-center mb-4">My Expertise</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {skill.map((item, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm border-light rounded">
                <img src={item.img} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={user.img} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I’m a motivated {user.position} Developer Intern with a strong
            interest in building efficient and scalable web applications. I have
            experience working with technologies like Spring Boot for{" "}
            {user.position} development, and I'm also proficient in frontend
            technologies such as HTML, CSS, JavaScript, and React. My goal is to
            contribute to meaningful projects and continue to learn from
            experienced professionals in the field.
          </p>
          <p className="hero--section-description">
            I have hands-on experience building RESTful APIs using Spring Boot,
            managing databases with MySQL, and creating responsive,
            user-friendly web pages with HTML, CSS, and Bootstrap. Additionally,
            I am familiar with integrating frontend applications with backend
            services, using React to create interactive user interfaces.
          </p>
          <p className="hero--section-description">
            I am passionate about improving my skills and am always eager to
            learn new technologies to enhance my development abilities. My focus
            is on writing clean, maintainable code, and I am keen on following
            best practices in software development. I am excited to contribute
            to real-world projects and collaborate with teams to create
            impactful applications.
          </p>
        </div>
      </div>
    </section>
  );
}

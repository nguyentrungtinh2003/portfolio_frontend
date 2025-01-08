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
          <div className="col-lg-6 text-center">
            <img
              src={user.img}
              alt="About Me"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <h1 className="fw-bold text-primary">About Me</h1>
              <p className="text-muted">
                I’m a motivated {user.position} Developer Intern with a strong
                interest in building efficient and scalable web applications. I
                have experience working with technologies like Spring Boot for
                {user.position} development, and I'm also proficient in frontend
                technologies such as HTML, CSS, JavaScript, and React. My goal
                is to contribute to meaningful projects and continue to learn
                from experienced professionals in the field.
              </p>
              <p className="text-muted">
                I have hands-on experience building RESTful APIs using Spring
                Boot, managing databases with MySQL, and creating responsive,
                user-friendly web pages with HTML, CSS, and Bootstrap.
                Additionally, I am familiar with integrating frontend
                applications with backend services, using React to create
                interactive user interfaces.
              </p>
              <p className="text-muted">
                I am passionate about improving my skills and am always eager to
                learn new technologies to enhance my development abilities. My
                focus is on writing clean, maintainable code, and I am keen on
                following best practices in software development. I am excited
                to contribute to real-world projects and collaborate with teams
                to create impactful applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

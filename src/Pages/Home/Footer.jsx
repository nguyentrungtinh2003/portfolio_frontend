import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) setNavActive(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      className={`bg-dark text-warning pt-5 pb-3 ${navActive ? "active" : ""}`}
    >
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <a href="/">
              <img
                src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif"
                alt="Portfolio"
                width={80}
                height={80}
                style={{
                  borderRadius: "50%",
                  border: "2px solid #ffc107",
                  objectFit: "cover",
                  boxShadow: "0 0 10px #ffc107",
                }}
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                { to: "heroSection", label: "Home" },
                { to: "AboutMe", label: "About Me" },
                { to: "mySkills", label: "Skills" },
                { to: "MyProjects", label: "Projects" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={closeMenu}
                    activeClass="text-warning text-decoration-none"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to={item.to}
                    className="text-warning text-decoration-none"
                    style={{ fontWeight: "500", cursor: "pointer" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 text-center">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-4">
              <li>
                <a
                  href="https://www.facebook.com/trungtinh8699"
                  target="_blank"
                  rel="noreferrer"
                  className="text-warning"
                >
                  <FaFacebook size={28} className="hover-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nguyentrungtinh2003"
                  target="_blank"
                  rel="noreferrer"
                  className="text-warning"
                >
                  <FaGithub size={28} className="hover-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nguyen-trung-tinh-513a70337/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-warning"
                >
                  <FaLinkedin size={28} className="hover-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-warning my-4" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0">
            Made with 💖 by Nguyen Trung Tinh © {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Optional CSS inline for hover effect */}
      <style>
        {`
          .hover-opacity:hover {
            opacity: 0.7;
            transition: opacity 0.3s ease-in-out;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;

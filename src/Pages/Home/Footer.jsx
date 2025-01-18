import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setNavActive(false); // Đảm bảo menu đóng khi màn hình đủ rộng
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer
      className={`footer--container ${navActive ? "active" : ""}`}
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="footer--link--container">
        <div>
          <img
            src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif"
            alt="Portfolio"
            width={80}
            height={80}
            style={{
              borderRadius: "50%", // Làm tròn hoàn toàn icon
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Hiệu ứng đổ bóng nhẹ
              objectFit: "cover", // Cắt ảnh để vừa vặn với khung tròn
              border: "2px solid white", // Viền trắng cho đẹp hơn
            }}
          />
        </div>
        <div className="footer--items navbar-nav">
          <ul>
            <li className="nav-item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="nav-link"
                style={{ fontWeight: "500" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="nav-link"
                style={{ fontWeight: "500" }}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="nav-link"
                style={{ fontWeight: "500" }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyProjects"
                className="nav-link"
                style={{ fontWeight: "500" }}
              >
                Projects
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="footer--social--icon navbar-nav">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/trungtinh8699"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={30} className="social-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/nguyentrungtinh2003"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nguyen-trung-tinh-513a70337/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Nguyen Trung Tinh</p>
        <div className="footer--social--icon">
          <ul>
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

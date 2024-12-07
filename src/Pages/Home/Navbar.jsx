import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("img");

    navigate("/"); // Đăng xuất và điều hướng về trang chủ
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        navActive ? "active" : ""
      }`}
    >
      <div className="container-fluid">
        <a href="/" className="text-decoration-none">
          <h3>Portfolio</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={navActive ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navActive ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
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
                to="mySkills"
                className="nav-link"
              >
                MySkill
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
                to="MyPortfolio"
                className="nav-link"
              >
                Portfolio
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
                to="testimonial"
                className="nav-link"
              >
                Testimonials
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
                to="sendmail"
                className="nav-link"
              >
                Send Mail
              </Link>
            </li>
          </ul>
          <div className="navbar-btns">
            <a href="/login">
              <button className="btn btn-primary m-2">
                <i class="fas fa-edit"></i>
              </button>
            </a>
            <a href="/chat">
              <button className="btn btn-primary m-2">
                <i class="fas fa-comments"></i>
              </button>
            </a>

            {localStorage.getItem("img") && (
              <div className="profile-info">
                <img
                  src={localStorage.getItem("img")}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />

                <a href="/dashboard">
                  <button className="btn btn-primary m-2">
                    <i class="fas fa-dashboard"></i>
                  </button>
                </a>
              </div>
            )}

            {localStorage.getItem("token") && (
              <button className="btn btn-danger ms-2" onClick={handleLogout}>
                <i className="fas fa-sign-out"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

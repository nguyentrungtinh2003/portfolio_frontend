import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Badge } from "react-bootstrap";

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
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid">
        <a href="/" className="text-decoration-none">
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
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={navActive ? "true" : "false"}
        >
          {/* <span className="navbar-toggler-icon"> */}
          <i className="fa fa-bars" style={{ color: "black" }}></i>
          {/* </span> */}
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
            {/* <li className="nav-item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="nav-link"
                style={{ fontWeight: "500" }}
              >
                Testimonials
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="sendmail"
                className="nav-link"
                style={{ fontWeight: "500" }}
              >
                Send Mail
              </Link>
            </li> */}
          </ul>
          <div className="navbar-btns">
            <a href="/login">
              <button className="btn btn-outline-primary m-2">
                <i className="fas fa-edit"></i>
              </button>
            </a>
            <a href="/chat">
              <button className="btn btn-outline-primary m-2">
                <i className="fas fa-comments"></i>
              </button>
            </a>

            {localStorage.getItem("img") && (
              <>
                <div className="profile-info position-relative">
                  <img
                    src={localStorage.getItem("img")}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Badge
                    pill
                    bg="success"
                    className="position-absolute bottom-0 end-0 translate-middle p-2"
                    style={{ width: "10px", height: "10px" }}
                  >
                    <i
                      className="fas fa-circle"
                      style={{ fontSize: "2px" }}
                    ></i>
                  </Badge>
                </div>

                <a href="/dashboard">
                  <button className="btn btn-outline-primary m-2">
                    <i className="fas fa-dashboard"></i>
                  </button>
                </a>
              </>
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

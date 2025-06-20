import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Badge } from "react-bootstrap";
import API from "../API";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await API();
      setUser(userData);
    };

    fetchUser();

    const handleResize = () => {
      if (window.innerWidth > 768) setNavActive(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("img");
    navigate("/");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        navActive ? "active" : ""
      }`}
      style={{
        backgroundColor: "#000",
        boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
        padding: "10px 20px",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif"
            alt="Portfolio"
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
              border: "2px solid #ffc107",
              objectFit: "cover",
              boxShadow: "0 0 10px #ffc107",
            }}
          />
          <span className="fw-bold text-warning fs-5 d-none d-md-inline">
            MyPortfolio
          </span>
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNav}
        >
          <i className="fa fa-bars text-warning fs-3"></i>
        </button>

        {/* Navbar menu */}
        <div className={`collapse navbar-collapse ${navActive ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center text-lg-start gap-lg-4">
            {[
              { label: "Home", to: "heroSection" },
              { label: "About Me", to: "AboutMe" },
              { label: "Skills", to: "mySkills" },
              { label: "Projects", to: "MyProjects" },
            ].map((item, i) => (
              <li key={i} className="nav-item">
                <Link
                  onClick={closeMenu}
                  activeClass="text-warning fw-bold"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={item.to}
                  className="nav-link text-warning px-3 py-2 rounded"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Nút phải */}
          <div className="d-flex align-items-center ms-lg-4 mt-3 mt-lg-0 flex-wrap justify-content-center gap-2">
            {/* <a href="/login" className="btn btn-outline-warning rounded-pill">
              <i className="fas fa-user"></i>
            </a>
            <a href="/chat" className="btn btn-outline-warning rounded-pill">
              <i className="fas fa-comments"></i>
            </a> */}

            {(localStorage.getItem("img") || (user && user.img)) && (
              <>
                <div className="position-relative">
                  <img
                    src="./img3.jpg"
                    alt="Profile"
                    className="rounded-circle"
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                    }}
                  />
                  <Badge
                    pill
                    bg="success"
                    className="position-absolute bottom-0 end-0 translate-middle p-2"
                    style={{ width: "10px", height: "10px" }}
                  />
                </div>
                {/* <a
                  href="/dashboard"
                  className="btn btn-outline-warning rounded-pill"
                >
                  <i className="fas fa-chart-line"></i>
                </a> */}
              </>
            )}

            {/* {localStorage.getItem("token") && (
              <button
                className="btn btn-danger rounded-pill"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i>
              </button>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

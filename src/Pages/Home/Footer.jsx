import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-warning ">
      <div className="row p-4">
        {/* Logo */}
        <div className="col-4">
          <a href="/">
            <img
              src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-circle border border-warning shadow-sm"
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>

        {/* Navigation */}
        <div className="col-4">
          <ul className="d-flex list-unstyled">
            {[
              { to: "heroSection", label: "Trang chủ" },
              { to: "AboutMe", label: "Giới thiệu" },
              { to: "mySkills", label: "Kỹ năng" },
              { to: "MyProjects", label: "Dự án" },
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-70}
                  className="text-warning text-decoration-none text-center fw-medium p-2"
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="col-4">
          <div className="d-flex justify-content-center justify-content-md-end gap-3">
            <a
              href="https://www.facebook.com/trungtinh8699"
              target="_blank"
              rel="noreferrer"
              className="text-warning"
            >
              <FaFacebook size={24} className="hover-opacity" />
            </a>
            <a
              href="https://github.com/nguyentrungtinh2003"
              target="_blank"
              rel="noreferrer"
              className="text-warning"
            >
              <FaGithub size={24} className="hover-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/nguyen-trung-tinh-513a70337/"
              target="_blank"
              rel="noreferrer"
              className="text-warning"
            >
              <FaLinkedin size={24} className="hover-opacity" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center small">
        © {new Date().getFullYear()} Nguyen Trung Tinh — Made with 💖
      </div>
    </footer>
  );
}

export default Footer;

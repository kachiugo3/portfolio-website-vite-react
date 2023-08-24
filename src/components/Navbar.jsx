import { useState } from "react";
import logoImg from "../assets/logo.png";
import {
  FaBars,
  FaBehance,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSideBar, showIsSideBar] = useState(false);
  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="nav-logo">
              <img src={logoImg} className="nav-logo" alt="nav logo" />
            </Link>
            <button
              className="nav-btn"
              id="nav-btn"
              onClick={() => showIsSideBar(true)}
            >
              <FaBars />
            </button>
          </div>
          <NavbarLinks classInfo={"nav-links"} />
        </div>
      </nav>

      <aside
        className={isSideBar ? "sidebar show-sidebar" : "sidebar"}
        id="sidebar"
      >
        <div>
          <button
            className="close-btn"
            id="close-btn"
            onClick={() => showIsSideBar(false)}
          >
            <FaXmark />
          </button>
          <NavbarLinks classInfo={"sidebar-links"} />

          <ul className="social-icons">
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=100010423146037"
                className="social-icon"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/KachiUgo"
                className="social-icon"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kachi-ugo-58862978/"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <FaBehance />
              </a>
            </li>
            <li>
              <a href="https://github.com/kachiugo3" className="social-icon">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Navbar;

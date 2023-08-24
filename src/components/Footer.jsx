import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
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
            <a href="https://www.twitter.com/KachiUgo" className="social-icon">
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
            <a href="https://www.twitter.com/KachiUgo" className="social-icon">
              <FaBehance />
            </a>
          </li>
          <li>
            <a href="https://github.com/kachiugo3" className="social-icon">
              <FaGithub />
            </a>
          </li>
        </ul>
        <p>
          &copy; <span id="date">{new Date().getFullYear()}</span> Kachi Ugo.
          all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;

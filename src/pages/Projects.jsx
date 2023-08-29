import { FaGithub, FaHouse, FaLink } from "react-icons/fa6";
import imageOne from "../assets/portfolio.png";
import imageTwo from "../assets/kaoshi.png";
import imageThree from "../assets/dimpact.png";
import imageFour from "../assets/ecomm.png";
import { Link } from "react-router-dom";

const Projects = () => {
  document.title = "Kachi Ugo || Projects";
  return (
    <>
      <header className="projects-hero">
        <div className="section-title">
          <h1>my projects</h1>
          <div className="underline"></div>
        </div>
      </header>
      <section className="section">
        <div className="section-center projects-page-center">
          <article className="single-project">
            <div className="project-container">
              <img src={imageOne} alt="single project" />
              <Link to="/" className="project-icon">
                <FaHouse />
              </Link>
            </div>
            <div className="project-details">
              <h4>Portfolio Website</h4>
              <p>
                I am a dedicated and skilled Full Stack Web Developer with
                expertise in frontend and backend development...
              </p>
              <div className="project-footer">
                <span>
                  <FaLink />
                </span>
                <a href="https://my-portfolio-website-three-tau.vercel.app/">
                  Live Site
                </a>
              </div>
            </div>
          </article>
          <article className="single-project">
            <div className="project-container">
              <img src={imageTwo} alt="single project" />
              <Link to="/" className="project-icon">
                <FaHouse />
              </Link>
            </div>
            <div className="project-details">
              <h4>Fintech Web App</h4>
              <p>
                Shop across - select the best rates and send money from US,
                Canada, UK, Europe to Nigeria and Ghana...
              </p>
              <div className="project-footer">
                <span>
                  <FaLink />
                </span>
                <a href="https://www.kaoshinetwork.com/">Live Site</a>
              </div>
            </div>
          </article>
          <article className="single-project">
            <div className="project-container">
              <img src={imageThree} alt="single project" />
              <Link to="/" className="project-icon">
                <FaHouse />
              </Link>
            </div>
            <div className="project-details">
              <h4>Product Landing Page</h4>
              <p>
                Diaspora Impact Inc. - a U.S. registered non-profit organization
                - is your gateway to making a difference...
              </p>
              <div className="project-footer">
                <span>
                  <FaGithub />
                </span>
                <a href="https://www.diasporaimpact.org/">Live Site</a>
              </div>
            </div>
          </article>
          <article className="single-project">
            <div className="project-container">
              <img src={imageFour} alt="single project" />
              <Link to="/" className="project-icon">
                <FaHouse />
              </Link>
              <a href="https://kachiugo.com"></a>
            </div>
            <div className="project-details">
              <h4>E-Commerce Store</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti vero praesentium porro iste fugit atque quas adipisci
                ipsum aliquid eos!
              </p>
              <div className="project-footer">
                <span>
                  <FaGithub />
                </span>
                <a href="https://www.christaloneprints.com">Live Site</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default Projects;

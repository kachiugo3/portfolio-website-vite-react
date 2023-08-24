import { FaGithub, FaHouse } from "react-icons/fa6";
import imageOne from "../assets/project-1.jpeg";

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
              <a href="https://kachiugo.com" className="project-icon">
                <FaHouse />
              </a>
            </div>
            <div className="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti vero praesentium porro iste fugit atque quas adipisci
                ipsum aliquid eos!
              </p>
              <div className="project-footer">
                <span>
                  <FaGithub />
                </span>
                <a href="https://www.github.com">source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default Projects;

import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import aboutImg from "../assets/about-img.jpeg";
import heroImg from "../assets/hero-img.jpeg";
import proj1 from "../assets/project-1.jpeg";
import proj2 from "../assets/project-2.jpeg";
import proj3 from "../assets/project-3.jpeg";
import proj4 from "../assets/project-4.jpeg";
import video from "../assets/connect.mp4";
import { Link } from "react-router-dom";
import { blog } from "../utils/data";

const featured = blog.filter((post) => post.featured === true);

const Home = () => {
  document.title = "Kachi Ugo || Home";
  return (
    <>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>I'm Kachi</h1>
            <h4>Full Stack Web Developer</h4>
            <Link to="/contact" className="btn hero-btn">
              hire me
            </Link>
            <ul className="social-icons hero-icon">
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
                <a
                  href="https://www.twitter.com/KachiUgo"
                  className="social-icon"
                >
                  <FaBehance />
                </a>
              </li>
              <li>
                <a href="https://github.com/kachiugo3" className="social-icon">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </article>
          <article className="hero-img">
            <img src={heroImg} className="hero-photo" alt="Kachi Ugo" />
          </article>
        </div>
      </header>
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img src={aboutImg} className="hero-photo" alt="about img" />
          </article>

          <article className="about-info">
            <div className="section-title about-title">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            <p>
              I am a dedicated and skilled Full Stack Web Developer with
              expertise in frontend and backend development. Proficient in
              technologies such as HTML, CSS, JavaScript, React, Node.js, and
              databases like MongoDB and MySQL, I offer end-to-end solutions for
              exceptional digital experiences. With a strong commitment to
              delivering high-quality results, I excel in problem-solving and
              attention to detail.
            </p>
            <p>
              Whether it's designing intuitive user interfaces or building
              robust server-side functionality, I ensure seamless project
              execution. My goal is to create innovative digital solutions that
              propel your business forward. Explore my portfolio to see examples
              of my work and get in touch today to discuss your project
              requirements. Together, we can embark on a transformative journey,
              turning your vision into a reality.
            </p>

            <a href="about.html" className="btn">
              about me
            </a>
          </article>
        </div>
      </section>

      <section className="section bg-grey">
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>

        <div className="services-center section-center">
          <article className="service">
            <i className="fas fa-code service-icon"></i>
            <h4>web development</h4>
            <div className="underline"></div>
            <p>
              My expertise lies in developing functional and user-friendly
              websites, utilizing cutting-edge technologies and industry best
              practices to deliver exceptional online experiences for businesses
              and individuals.
            </p>
          </article>

          <article className="service">
            <i className="fab fa-sketch service-icon"></i>
            <h4>web design</h4>
            <div className="underline"></div>
            <p>
              My specialty is in crafting visually captivating and intuitive
              website interfaces that leave a lasting impression, effectively
              conveying your brand's message and enhancing user engagement.
            </p>
          </article>

          <article className="service">
            <i className="fab fa-android service-icon"></i>
            <h4>app design</h4>
            <div className="underline"></div>
            <p>
              From concept to execution, I specialize in designing sleek and
              intuitive web applications that captivate users, enhance brand
              recognition, and deliver seamless experiences across devices and
              platforms.
            </p>
          </article>
        </div>
      </section>

      <section className="section projects">
        <div className="section-title">
          <h2>latest works</h2>
          <div className="underline"></div>
          <p className="projects-text">
            Welcome to my portfolio showcasing my latest web development
            projects! With a focus on creativity, functionality, and innovation,
            each project represents my passion for crafting exceptional digital
            experiences. From responsive designs to seamless user interfaces, my
            work reflects a commitment to delivering high-quality solutions that
            captivate users and drive results. Whether you're a potential client
            or employer, I invite you to delve into my portfolio and discover
            the transformative potential we can unlock together.
          </p>
        </div>
        <div className="section-center projects-center">
          <a href="projects.html" className="project-1">
            <article className="project">
              <img src={proj1} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>

          <a href="projects.html" className="project-2">
            <article className="project">
              <img src={proj2} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>

          <a href="projects.html" className="project-3">
            <article className="project">
              <img src={proj3} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>

          <a href="projects.html" className="project-4">
            <article className="project">
              <img src={proj4} alt="single project" className="project-img" />
              <div className="project-info">
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
        </div>
      </section>

      <section className="connect">
        <video
          controls
          autoPlay={true}
          muted
          loop
          className="video-container"
          poster={proj1}
        >
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>

          <p className="video-text">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together. Reach out to me today and let's discuss
            how I can help you achieve your web development goals.
          </p>
          <a href="contact.html" className="btn">
            contact me
          </a>
        </div>
      </section>

      <section className="section skills">
        <div className="section-title">
          <h2>skills</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center skills-center">
          <article>
            <h3>front end</h3>

            <div className="skill">
              <p>HTML/CSS</p>
              <div className="skill-container">
                <div className="skill-value"></div>
                <p className="skill-text">50%</p>
              </div>
            </div>

            <div className="skill">
              <p>Javascript</p>
              <div className="skill-container">
                <div className="skill-value value-70"></div>
                <p className="skill-text skill-text-70">70%</p>
              </div>
            </div>

            <div className="skill">
              <p>React</p>
              <div className="skill-container">
                <div className="skill-value value-80"></div>
                <p className="skill-text skill-text-80">80%</p>
              </div>
            </div>
          </article>
          <article>
            <h3>back end</h3>

            <div className="skill">
              <p>Node</p>
              <div className="skill-container">
                <div className="skill-value"></div>
                <p className="skill-text">50%</p>
              </div>
            </div>

            <div className="skill">
              <p>Mongose DB</p>
              <div className="skill-container">
                <div className="skill-value value-70"></div>
                <p className="skill-text skill-text-70">70%</p>
              </div>
            </div>

            <div className="skill">
              <p>Express JS</p>
              <div className="skill-container">
                <div className="skill-value value-80"></div>
                <p className="skill-text skill-text-80">80%</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section timeline">
        <div className="section-title">
          <h2>timeline</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center timeline-center">
          <article className="timeline-item">
            <h4>2020</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolor esse, alias velit ea commodi ipsum sit nihil saepe quas!
            </p>
            <span className="number">1</span>
          </article>

          <article className="timeline-item">
            <h4>2019</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolor esse, alias velit ea commodi ipsum sit nihil saepe quas!
            </p>
            <span className="number">2</span>
          </article>

          <article className="timeline-item">
            <h4>2018</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolor esse, alias velit ea commodi ipsum sit nihil saepe quas!
            </p>
            <span className="number">3</span>
          </article>

          <article className="timeline-item">
            <h4>2017</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolor esse, alias velit ea commodi ipsum sit nihil saepe quas!
            </p>
            <span className="number">4</span>
          </article>

          <article className="timeline-item">
            <h4>2016</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolor esse, alias velit ea commodi ipsum sit nihil saepe quas!
            </p>
            <span className="number">5</span>
          </article>

          <article className="timeline-item">
            <h4>2015</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolor esse, alias velit ea commodi ipsum sit nihil saepe quas!
            </p>
            <span className="number">6</span>
          </article>
        </div>
      </section>

      <section className="section blog">
        <div className="section-title">
          <h2>featured blog</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center blog-center">
          {featured.map(
            ({
              id,
              featureImage: img,
              title,
              blurb,
              authorImage,
              readTime,
            }) => {
              return (
                <div key={id} className="card">
                  <div className="card-side card-front">
                    <img src={img} alt={title} />
                    <div className="card-info">
                      <h4>{title}</h4>
                      <p>{blurb}</p>
                      <div className="card-footer">
                        <img src={authorImage} alt="author image" />
                        <p>{readTime}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-side card-back">
                    <Link to={`/blog/${id}`}>
                      <button className="btn">read more</button>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};
export default Home;

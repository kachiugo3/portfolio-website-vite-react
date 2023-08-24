import { Link } from "react-router-dom";

const About = () => {
  document.title = "Kachi Ugo || About";
  return (
    <>
      <section className="section single-page">
        <div className="section-title">
          <h1>about me</h1>
          <div className="underline"></div>
        </div>

        <div className="section-center page-info">
          <p>
            Hey there! <br />
            <br />
            I'm thrilled to connect with you and share a bit about myself. I'm
            not just your average Full Stack Web Developer. I'm passionate about
            crafting extraordinary digital experiences that leave a lasting
            impact. With expertise in frontend and backend development, I'm
            well-versed in HTML, CSS, JavaScript, React, Node.js, and databases
            like MongoDB and MySQL. <br />
            <br />
            What sets me apart is my unwavering commitment to delivering nothing
            short of excellence. I take pride in solving complex problems and
            paying meticulous attention to every detail. From designing user
            interfaces that are intuitive and visually captivating to building
            robust server-side functionality, I ensure that your project runs
            seamlessly from start to finish. <br />
            <br />
            My ultimate goal is to create innovative digital solutions that
            propel your business forward. Together, we'll embark on a
            transformative journey where we turn your vision into a vibrant
            reality. Take a moment to explore my
            <Link to="/projects"> portfolio </Link>
            and see examples of my work. It's a testament to my dedication and
            the remarkable results we can achieve. <br />
            <br />
            Ready to bring your ideas to life? Let's
            <Link to="/contact"> chat</Link> about your project requirements and
            how we can collaborate. I can't wait to be a part of your success
            story! <br />
            <br />
            Warm regards, <br />
            <br />~ Kachi
          </p>
        </div>
      </section>
    </>
  );
};
export default About;

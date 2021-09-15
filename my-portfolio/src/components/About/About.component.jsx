import Skills from "../Skills/Skills.component";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init({
      disable: "mobile",
      duration: 2000,
    });
  }, []);
  return (
    <div className="about-me-container">
      <div className="div-left" data-aos="fade-right" id="about">
        <div className="about-me-title">
          <span className="text-like-html">{"<h2>"}</span>
          <h2>About Me</h2>
          <span className="text-like-html">{"</h2>"}</span>
        </div>
        <div className="about-me-explanation">
          <span className="text-like-html">{"<p>"}</span>
          <p>
            {" "}
            <span className="p-color">Hi</span> There,
          </p>
          <p>
            I'm Nikola Ristoski{" "}
            <span className="p-color">bachelor of Informatics</span> and{" "}
            <span className="p-color">Full Stack JavaScript Developer</span>{" "}
            located in Skopje, Macedonia.
          </p>
          <p>
            I'm passionated about{" "}
            <span className="p-color">Web development </span>
            and learning <span className="p-color">new technologies</span>.
          </p>
          <p>
            <span className="p-color">Proactive, fast learner</span> <span className="p-color">and motivated Team Player </span> eager and excited to
            learn from industry experts.
          </p>
          <p>
            Interested in the entire
            <span className="p-color"> Web Development </span> spectrum and
            working on ambitious projects with{" "}
            <span className="p-color">Positive </span>
            people.
          </p>
          <p>
            Looking for an <span className="p-color">Entry level</span> job or
            <span className="p-color"> Intership</span> position.
          </p>
          <span className="text-like-html">{"</p>"}</span>
        </div>
      </div>
      <div className="div-right" data-aos="fade-left" id="skills">
        <span className="text-like-html">{"<h2>"}</span>
        <h2>Skills</h2>
        <span className="text-like-html">{"</h2>"}</span>

        <span className="span-block line-1 text-like-html">{`const Skills = () => {`}</span>
        <span className="span-block line-2 text-like-html">
          {`let mySkills = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js", "Express.js", "MongoDB"]`}
        </span>
        <span className="span-block line-3 text-like-html">{`return (`}</span>
        <span className="span-block line-4 text-like-html">
          {`mySkills.map(skill => <h3>{skill}</h3>)`}
        </span>
        <span className="span-block line-5 text-like-html">{`);`}</span>
        <span className="span-block line-6 text-like-html">{`};`}</span>
        <span className="span-block line-7 text-like-html">{`export default Skills;`}</span>
        <div className="skills-grid-container">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;

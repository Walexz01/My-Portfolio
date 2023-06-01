import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";
import mysql from "../assets/mySQL.svg";
import node from "../assets/nodejs.svg";

const skills = [html, css, javascript, typescript, react, git, mysql, node];
const Skills = () => {
  return (
    <section className="skills__section">
      <div className="container skill__container">
        <div className="heading">
          <h2>My Skills</h2>
          <p>
            I have extensive experience with technologies like React, JavaScript
            BootstrapCss and others
          </p>
        </div>
        <div className="skills__container">
          {skills.map((skill, index) => (
            <img className="skill" src={skill} key={index} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

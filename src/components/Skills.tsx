import { skills } from "../Data/Skills";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section className="skills__section">
      <div className="container skill__container">
        <Heading
          title="My Skills"
          desc="I have extensive experience with technologies like React, JavaScript, BootstrapCss and others"
        />
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

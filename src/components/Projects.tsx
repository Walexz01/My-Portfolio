import Heading from "./Heading";
import Projectcard from "./Projectcard";
import project1 from "../assets/localhost_5173_ (1).png";
import { projects } from "../Data/Projects";

const Projects = () => {
  return (
    <section className="projects__section">
      <div className="container projects__container">
        <Heading
          title="Project"
          desc="Here are some of the projects have worked on"
        />
        <div className="projects__card__container">
          {projects.map(({ image, name, details, githubLinnk, siteLink }) => (
            <Projectcard
              image={image}
              name={name}
              details={details}
              githubLinnk={githubLinnk}
              siteLink={siteLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import Heading from "./Heading";
import Projectcard from "./Projectcard";
import { projects } from "../Data/Projects";

const Projects = () => {
  return (
    <section className="projects__section">
      <div className="container projects__container">
        <Heading
          classname="projects__heading"
          title="Project"
          desc="Here are some of the projects have worked on"
        />
        <div className="projects__card__container">
          {projects.map(
            ({ image, name, details, githubLinnk, siteLink }, index) => (
              <Projectcard
                key={index}
                image={image}
                name={name}
                details={details}
                githubLinnk={githubLinnk}
                siteLink={siteLink}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

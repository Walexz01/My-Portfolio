import { VscGithub } from "react-icons/vsc";
import { BsLink45Deg } from "react-icons/bs";
import { Project } from "../Data/Projects";

const Projectcard = ({
  image,
  name,
  details,
  githubLinnk,
  siteLink,
}: Project) => {
  return (
    <div className="projects__card">
      <img src={image} alt="" />
      <div className="project__details">
        <h3 className="project__name ">{name}</h3>
        <p className="project__about">{details}</p>
      </div>
      <div className="project__action__btn ">
        {githubLinnk && (
          <button className="color__hover__btn btn">
            <VscGithub />
            <a href={githubLinnk}>Code</a>
          </button>
        )}
        {siteLink && (
          <button className="btn__colored btn visit__btn">
            <BsLink45Deg />
            <a target="blank" href={siteLink}>
              Visit
            </a>
          </button>
        )}{" "}
      </div>
    </div>
  );
};

export default Projectcard;

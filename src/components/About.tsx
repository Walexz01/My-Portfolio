import { descs } from "../Data/About";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Heading from "./Heading";
import cv from "../assets/Adewale CV.pdf";
const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="container about__container">
        <Heading
          classname="about__heading"
          title="About Me"
          desc="Main informations about me"
        />
        <div className="about__contents">
          <div className="about__left"></div>
          <div className="about__right">
            <div className="about__right--content">
              <h3>Hello, I'm Adewale Adegbite, Based in Nigeria</h3>
              {descs.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <div className="cv__link">
                <a href={cv} download className="btn btn__colored">
                  <FaCloudDownloadAlt /> Downlod My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

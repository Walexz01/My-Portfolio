import { descs, details_1, details_2 } from "../Data/About";
import about_image from "../assets/IMG_20220514_074006.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Heading from "./Heading";
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
          <div className="about__left">
            <img src={about_image} alt="" />
          </div>
          <div className="about__right">
            <div className="about__right--content">
              <h3>Hello, I'm Adewale Adegbite, Based in Nigeria</h3>
              {descs.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <div className="details__container">
                <div className="details__left">
                  {details_1.map(({ key, value }, index) => (
                    <div className="detail" key={index}>
                      <h3>{key}:</h3>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="details__right">
                  {details_2.map(({ key, value }, index) => (
                    <div className="detail" key={index}>
                      <h3>{key}:</h3>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cv__link">
                <a href="" download className="btn btn__colored">
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

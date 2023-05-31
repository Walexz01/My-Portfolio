import about_image from "../assets/IMG_20220514_074006.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";
const About = () => {
  return (
    <section className="about__section">
      <div className="container about__container">
        <div className="heading">
          <h2>About Me</h2>
          <p>Main informations about me</p>
        </div>
        <div className="about__contents">
          <div className="about__left">
            <img src={about_image} alt="" />
          </div>
          <div className="about__right">
            <div className="about__right--content">
              <h3>Hello, I'm Adewale Adegbite, Based in Nigeria</h3>
              <p>
                A passionate and creative frontend developer with a strong
                interest in crafting engaging and user-friendly web experiences.
                My focus is primarily on the frontend, with skills in HTML, CSS,
                JavaScript, React, BootStrapCss. I enjoy keeping up-to-date with
                the latest design trends.
              </p>
              <p>
                While myknowledge of Node.js and MySQL is limited, I am
                committed to continuously improving my skills and expanding my
                knowledge. With my dedication to delivering high-quality work, I
                am confident that I can exceed your expectations. I am both an
                efficient team player and solo worker. I have honed my skills in
                frontend development and design to bring digital ideas to life.
              </p>
              <div className="details__container">
                <div className="details__left">
                  <div className="detail">
                    <h3>Name:</h3>
                    <span> Adegbite Adewale</span>
                  </div>
                  <div className="detail">
                    <h3>Date Of Birth:</h3> <span> 14-04-2005</span>
                  </div>
                  <div className="detail">
                    <h3>Nationality:</h3> <span> Nigerian</span>
                  </div>
                  <div className="detail">
                    <h3>Work Status:</h3> <span> Web Developer</span>
                  </div>
                </div>
                <div className="details__right">
                  <div className="detail">
                    <h3>Phone:</h3>
                    <span>+2348145439490 </span>
                  </div>
                  <div className="detail">
                    <h3>Email:</h3> <span>walexz1937@gmail.com</span>
                  </div>
                  <div className="detail">
                    <h3>Address:</h3> <span>Iseyin,Oyo State, NG</span>
                  </div>
                  <div className="detail">
                    <h3>Freelancer:</h3> <span>Available</span>
                  </div>
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

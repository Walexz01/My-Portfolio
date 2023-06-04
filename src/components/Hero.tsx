import AnchorLink from "react-anchor-link-smooth-scroll";
import hero__img from "../assets/adewale-image.png";
import Anchor from "./Anchor";

const Hero = () => {
  return (
    <section className="hero__section" id="home">
      <div className="container hero__container">
        {/* ====== left start ======= */}
        <div className="hero__left">
          <div className="hero__contents">
            <h2 className="hero__greeting">
              Hello, <span className="name gradient__text">I'm Adewale,</span> a
              Web Developer based in Nigeria.
            </h2>
            <div className="little__intro">
              I have over a year of experience building websites and web apps.
            </div>
            <div className="ctns">
              <button className="btn__colored btn">
                <AnchorLink href="#contact"> Get In Touch</AnchorLink>
              </button>
              <button className="color__hover__btn btn">
                <Anchor id="services" name="My Services" />
              </button>
            </div>
          </div>
        </div>
        {/* ============== left ends ======== */}
        <div className="hero__right" data-aos="fade-in">
          <img src={hero__img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

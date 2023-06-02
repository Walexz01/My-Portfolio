import hero__img from "../assets/IMG_i8ax5q-PhotoRoom.png";
const Hero = () => {
  return (
    <section className="hero__section" id="home">
      <div className="container hero__container">
        {/* ====== left start ======= */}
        <div className="hero__left">
          <div className="hero__contents">
            <h2 className="hero__greeting">
              Hello, <span className="name gradient__text">I'm Adewale,</span>
              Web Developer based in Nigeria.
            </h2>
            <div className="little__intro">
              I am web developer with 1 year experience,in this 1 year i have
              worked on some personnal projects.
            </div>
            <div className="ctns">
              <button className="btn__colored btn">
                <a href=""> Get In Touch</a>
              </button>
              <button className="color__hover__btn btn">
                <a href="">View All Works</a>
              </button>
            </div>
          </div>
        </div>
        {/* ============== left ends ======== */}
        <div className="hero__right">
          <img src={hero__img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Servicecard from "./Servicecard";
import github from "../assets/github.png";
import coding from "../assets/coding.png";
import reponsiveness from "../assets/phone_laptop_filled_icon_200393.png";

const Services = () => {
  return (
    <section className="services__section">
      <div className="container services__container">
        <div className="heading">
          <h2>My Services</h2>
        </div>
        <div className="services">
          <Servicecard
            image={github}
            heading="Version Control System"
            desc="With the use of version control sytems(Git) and hosting services
                (GitHub), I can manage your website after deploments and make
                any updates when needed."
          />
          <Servicecard
            image={coding}
            heading="Frontend Web Dev."
            desc="I make use of HTML, CSS, JavScriptand React to make interactive and functional frontend framework for businesses or other purposes."
          />
          <Servicecard
            image={reponsiveness}
            heading="Responsive design"
            desc="Making websites change dynamically depending on screen size and viewport ranging from laptop to tablets and mobile phones."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

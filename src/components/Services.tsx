import Servicecard from "./Servicecard";
import { services } from "../Data/Services";
import Heading from "./Heading";

const Services = () => {
  return (
    <section className="services__section">
      <div className="container services__container">
        <Heading classname="services__heading" title="My Services" />
        <div className="services">
          {services.map(({ image, heading, desc }, index) => (
            <Servicecard
              key={index}
              image={image}
              heading={heading}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

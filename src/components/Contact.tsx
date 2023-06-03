import Heading from "./Heading";
import emailjs from "@emailjs/browser";
import { BsFillSendFill } from "react-icons/bs";
import { lists } from "../Data/contacts";
import Contactlink from "./ContactLink";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };
  return (
    <section className="contact__section" id="contact">
      <div className="container contact__container">
        <Heading
          classname="contact__heading"
          title="Contact Me"
          desc="Feel free to contact me anytime"
        />
        <div className="contact__bottom">
          <div className="contact__form__container">
            <h2 className="gradient__text contact__head">Start by saying hi</h2>
            <form onSubmit={handleSubmit} className="contact__form">
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input"
                name="user_email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
              />
              <button className="send__btn btn color__hover__btn">
                <BsFillSendFill /> Send Message
              </button>
            </form>
          </div>
          <div className="contact__links__container">
            <h2 className="gradient__text contact__head">
              Let's make something amazing together.
            </h2>
            <p className="contact__intro">
              Interested in working together? I'm always open to discussing web
              development work or partnership opportunities, don’t hesitate to
              reach out. The goal is to engage in a conversation that leads to a
              fruitful partnership and a tailored solution to our specific needs
              ❤️.
            </p>

            <div className="contact__links">
              {lists.map(({ icon, href, title, value }, index) => (
                <Contactlink
                  key={index}
                  href={href}
                  icon={icon}
                  title={title}
                  value={value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

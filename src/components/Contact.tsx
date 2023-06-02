import Heading from "./Heading";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";

interface UserInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
type input_event =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

const Contact = () => {
  const [input, setinput] = useState<UserInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInput = (e: input_event) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    console.log("submitted");
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
                value={input.name}
                type="text"
                placeholder="Your Name"
                className="input"
                name="name"
                onChange={(e) => handleInput(e)}
                required
              />
              <input
                value={input.email}
                type="email"
                placeholder="Your Email"
                className="input"
                name="email"
                onChange={(e) => handleInput(e)}
                required
              />
              <input
                value={input.subject}
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                onChange={(e) => handleInput(e)}
                required
              />
              <textarea
                value={input.message}
                name="message"
                id="message"
                placeholder="Your Message"
                required
                onChange={(e) => handleInput(e)}
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              porro perspiciatis velit quis obcaecati aperiam sed temporibus
              facilis voluptas tenetur! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam, aut!
            </p>

            <div className="contact__links">
              <div className="contact_link detail">
                <BsFillTelephoneFill />
                <h3>Phone:</h3>
                <span>
                  <a href="tel:+2348145439490">+2348145439490</a>
                </span>
              </div>
              <div className="contact_link detail">
                <HiMail />
                <h3>Gmail:</h3>
                <span>
                  <a href="mailto:walexz1937@gmail.com">walexz1937@gmail.com</a>
                </span>
              </div>
              <div className="contact_link detail">
                <AiFillTwitterCircle />
                <h3>Twitter:</h3>
                <span>
                  <a href="">walexz1937</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

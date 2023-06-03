import { Links } from "../Data/NavLinks";
import Anchor from "./Anchor";

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="container footer__container">
        <div className="footer__logo">
          Walexz<span className="sub">.dev</span>
        </div>
        <ul className="bottom__nav">
          {Links.map(({ id, name }) => (
            <li className="bottom__nav__link" key={id}>
              <Anchor id={id} name={name} />
            </li>
          ))}
        </ul>
        <div className="end">Made with ❤️ by Walexz</div>
      </div>
    </section>
  );
};

export default Footer;

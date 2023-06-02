import { Links } from "../Data/NavLinks";

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="container footer__container">
        <div className="footer__logo">
          Walexz<span className="sub">.com</span>
        </div>
        <ul className="bottom__nav">
          {Links.map(({ id, name }) => (
            <li className="bottom__nav__link" key={id}>
              <a href="">{name}</a>
            </li>
          ))}
        </ul>
        <div className="end">Made with ❤️ by Walexz</div>
      </div>
    </section>
  );
};

export default Footer;

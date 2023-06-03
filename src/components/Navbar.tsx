import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { Links } from "../Data/NavLinks";
import Anchor from "./Anchor";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__items">
          <AnchorLink href="#home" className="nav__logo">
            Walexz<span className="sub">.dev</span>
          </AnchorLink>
          <ul className={isNavOpen ? "nav__links open" : "nav__links"}>
            {Links.map(({ id, name }) => (
              <li className="nav__link" key={id}>
                <Anchor id={id} name={name} />
              </li>
            ))}
          </ul>
          <div className="toggle__btn" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <AiOutlineClose /> : <GoThreeBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

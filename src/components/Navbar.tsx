import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { Links } from "../Data/NavLinks";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__items">
          <div className="nav__logo">
            Walexz<span className="sub">.com</span>
          </div>
          <ul className={isNavOpen ? "nav__links open" : "nav__links"}>
            {Links.map(({ id, name }) => (
              <li className="nav__link" key={id}>
                <a href="">{name}</a>
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

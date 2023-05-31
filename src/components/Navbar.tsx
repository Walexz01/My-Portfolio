import { useState } from "react";

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
            <li className="nav__link">
              <a href="">Home</a>
            </li>
            <li className="nav__link">
              <a href="">About</a>
            </li>
            <li className="nav__link">
              <a href="">Services</a>
            </li>
            <li className="nav__link">
              <a href="">Projects</a>
            </li>
            <li className="nav__link">
              <a href="">Contacts</a>
            </li>
          </ul>
          <div className="toggle__btn" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? "close" : "open"}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

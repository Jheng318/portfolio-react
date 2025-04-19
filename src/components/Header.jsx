import { useState } from "react";
import sun from "../assets/solar_sun-bold.svg";
import moon from "../assets/solar_moon-bold.svg";
import logo_light from "logo_light.svg";
import logo_dark from "logo_dark.svg";
import Button from "./Button";

function Header({ isDark, handleIsDark }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header className={`limit ${isNavOpen ? "nav-state-open" : ""}`}>
      <img src={isDark ? logo_dark : logo_light} alt="logo" id="logo" />
      <div id="navDiv">
        <nav id="nav" className={isNavOpen ? "nav-open" : ""}>
          <ul>
            <li>
              <Button id="close" onClick={toggleNav}>
                X
              </Button>
            </li>
            <li>
              <a href="#about" onClick={toggleNav}>
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleNav}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleNav}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={toggleNav}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleNav}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Button onClick={handleIsDark} id="darkBtn">
          <img src={isDark ? sun : moon} alt="dark mode icons" />
        </Button>
        <label htmlFor="nav" id="navLbl" onClick={toggleNav}>
          &#9776;
        </label>
      </div>
    </header>
  );
}

export default Header;

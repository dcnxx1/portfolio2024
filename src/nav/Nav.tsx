import "./nav.scss";
import logo from "../assets/images/logo_svg.svg";
import { useState } from "react";
export default function Nav(): JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="imgcontainer">
          <img className="logo" src={logo} />
        </div>

        <ul className="nav-navsection">
          <li>Over</li>
          <li>Projecten</li>
          <li>Contact</li>
          <li>CV</li>
        </ul>
      </div>
    </nav>
  );
}

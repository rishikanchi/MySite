import { useState } from 'react';
import { Link } from 'react-scroll'; // Import the scroll Link
import './Navbar.css';
import rk_logo from "../images/rk_logo.png"
import hamburger from "../images/hamburger.png"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={rk_logo} id="logoPic" alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={hamburger} id="hamPic" alt="hamburger-menu" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="intro" smooth={true} duration={500} offset={-100} spy={true} activeClass="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="blog" smooth={true} duration={500} offset={-100} spy={true} activeClass="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-100} spy={true} activeClass="active">
                Projects
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-100} spy={true} activeClass="active">
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-100} spy={true} activeClass="active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

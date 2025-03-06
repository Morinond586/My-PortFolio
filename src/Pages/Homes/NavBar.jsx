/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import Logo from "../../img/code_48px.png";
import { Link } from "react-scroll";

function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        // eslint-disable-next-line no-unused-expressions
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("risize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      // eslint-disable-next-line no-unused-expressions
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src={Logo} alt="Logo" /> MyPortFolio
      </div>
      <a
        className={`nav__hamburger ${navActive ? 
          "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="heroSection"
            className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="myskills"
            className="navbar--content"
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Myportfolio"
            className="navbar--content"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="aboutMe"
            className="navbar--content"
            >
              A propos de moi
            </Link>
          </li>
 
          <li>
            <Link onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="testimonial"
            className="navbar--content"
            >
              competences
            </Link>
          </li>
        </ul>
      </div>
      <Link onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btns btn-outline-primary"
            >
              Contact Me
    </Link>
    </nav>

  );
}

export default NavBar;

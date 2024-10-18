import logo from "./assets/logo.svg";
import { useMediaQuery } from "react-responsive";
import menuIcon from "./assets/icon-hamburger.svg";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);
  const desktop = useMediaQuery({ minWidth: 768 });

  if (desktop) {
    return (
      <>
        <nav className="bg-mobile md:bg-desktop">
          <img src={logo} />
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className="bg-mobile md:bg-desktop">
        <img src={logo} />
        <button onClick={toggle}>
          <img src={menuIcon} />
        </button>
      </nav>
      {menu && <MobileMenu onClick={toggle} />}
    </>
  );
};

export default Nav;

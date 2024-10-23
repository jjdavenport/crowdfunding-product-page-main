import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-hamburger.svg";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import closeIcon from "./assets/icon-close-menu.svg";

const Nav = ({ desktop, select, complete }) => {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  if (desktop) {
    return (
      <>
        <nav className="item flex h-96 w-full justify-between bg-desktop p-10 font-medium text-white ~md/xl:~px-20/32">
          <img className="h-6 object-contain" src={logo} />
          <ul className="flex gap-8">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className="flex h-96 w-full justify-between bg-mobile bg-cover p-4">
        <img
          className={`${select || complete ? "z-0" : "z-50"} h-6 object-contain`}
          src={logo}
        />
        <button
          className={`${select || complete ? "z-0" : "z-50"} h-6 w-4`}
          onClick={toggle}
        >
          <img className="object-contain" src={menu ? closeIcon : menuIcon} />
        </button>
      </nav>
      {menu && <MobileMenu />}
    </>
  );
};

export default Nav;

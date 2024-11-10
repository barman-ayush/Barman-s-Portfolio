import { Fragment, useEffect, useState } from "react";
import Logo from "../../assets/Navbar/Logo.svg";
import SideLine from "../SideLine/SideLine.jsx";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import MyLogo from "../Logo/Logo.jsx";
import Hamburger from "../../assets/Navbar/Hamburger.svg";
import MobileNavbar from "./MobileNavbar/MobileNavbar.jsx";
import cross from "../../assets/Navbar/cross.svg"

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname == path;

  const modalOpener = () => setIsOpen(!isOpen);

  return (
    // add mobile view
    <Fragment>
      <section
        className="navbar-container relative  flex flex-row w-full  justify-around items-center py-5 sticky top-0 z-40"
        style={{ backgroundColor: "#282c33", height: "10%"}}
      >
        <SideLine />
        <MyLogo />
        <div className="mobile-hamburger-menu" onClick={modalOpener}>
          {isOpen ? <img src={cross} /> : <img src={Hamburger} />}
        </div>
        {/* Mobile Navbar */}
        {isOpen ? <MobileNavbar currentTabChecker={isActive} setIsOpen={setIsOpen} isOpen={isOpen} /> : <></>}

        <div className="tab-links pt-3">
          <ul className="flex flex-row">
            <li
              className={`px-4 text-white opacity-70   ${
                isActive("/") ? "opacity-100" : ""
              }  hover:opacity-100  transition-opacity duration-200 active`}
            >
              <a href="/">
                <span style={{ color: "#c778dd" }}>#</span>home
              </a>
            </li>
            <li
              className={`px-4 text-white ${
                isActive("/works") ? "opacity-100" : ""
              } opacity-70 hover:opacity-100  transition-opacity duration-200`}
            >
              <a href="/works">
                <span style={{ color: "#c778dd" }}>#</span>works
              </a>
            </li>
            <li
              className={`px-4 text-white ${
                isActive("/about") ? "opacity-100" : ""
              } opacity-70 hover:opacity-100  transition-opacity duration-200`}
            >
              <a href="/about">
                <span style={{ color: "#c778dd" }}>#</span>about-me
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;

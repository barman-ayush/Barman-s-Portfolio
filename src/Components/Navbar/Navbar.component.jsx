import { Fragment, useEffect } from "react";
import Logo from "../../assets/Navbar/Logo.svg";
import SideLine from "../SideLine/SideLine.component";
import "./Navbar.styles.css"
import { useLocation } from "react-router-dom";
import MyLogo from "../Logo/Logo.component";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname == path;


  return (
    // add mobile view
    <Fragment>
      <section
        className="flex flex-row justify-around items-center py-5 sticky top-0 z-40"
        height={61}
        style={{ backgroundColor: "#282c33" }}
      >
        <SideLine />
        <MyLogo/>
        <div className="mobile-hamburger-menu">
        </div>
        <div className="tab-links pt-3">
          <ul className="flex flex-row">
            <li className={`px-4 text-white opacity-70  ${isActive("/") ? "opacity-100" : "" }  hover:opacity-100  transition-opacity duration-200 active`}>
              <a href="/">
                <span style={{ color: "#c778dd" }}>#</span>home
              </a>
            </li>
            <li className={`px-4 text-white ${isActive("/works") ? "opacity-100" : "hell0" } opacity-70 hover:opacity-100  transition-opacity duration-200`}>
              <a href="/works">
                <span style={{ color: "#c778dd" }}>#</span>works
              </a>
            </li>
            <li className={`px-4 text-white ${isActive("/about") ? "opacity-100" : "hell0" } opacity-70 hover:opacity-100  transition-opacity duration-200`}>
              <a href="/about">
                <span style={{ color: "#c778dd" }}>#</span>about-me
              </a>
            </li>
            <li className={`px-4 text-white ${isActive("/contact") ? "opacity-100" : "hell0" } opacity-70 hover:opacity-100  transition-opacity duration-200`}>
              <a href="/contact">
                <span style={{ color: "#c778dd" }}>#</span>contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;

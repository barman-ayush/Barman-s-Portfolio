import { Fragment } from "react";
import Logo from "../../assets/Navbar/Logo.svg";
import SideLine from "../SideLine/SideLine.component";

const Navbar = () => {
  return (
    // add mobile view
    <Fragment>
      <section
        className="flex flex-row justify-around items-center py-5 sticky top-0 z-40"
        height={61}
        style={{ backgroundColor: "#282c33" }}
      >
        <SideLine />
        <div className="logo-component flex flex-row pt-3 ">
          <img src={Logo} width={16} height={16} className="mr-2" />
          <p className="text-white">Ayush</p>
        </div>
        <div className="tab-links pt-3">
          <ul className="flex flex-row">
            <li className="px-4 text-white opacity-70  hover:opacity-100 active:opacity-100 transition-opacity duration-200 active">
              <a href="">
                <span style={{ color: "#c778dd" }}>#</span>home
              </a>
            </li>
            <li className="px-4 text-white opacity-70 hover:opacity-100 active:opacity-100 transition-opacity duration-200 ">
              <a href="">
                <span style={{ color: "#c778dd" }}>#</span>works
              </a>
            </li>
            <li className="px-4 text-white opacity-70 hover:opacity-100 active:opacity-100 transition-opacity duration-200 ">
              <a href="">
                <span style={{ color: "#c778dd" }}>#</span>about-me
              </a>
            </li>
            <li className="px-4 text-white opacity-70 hover:opacity-100 active:opacity-100 transition-opacity duration-200 ">
              <a href="">
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

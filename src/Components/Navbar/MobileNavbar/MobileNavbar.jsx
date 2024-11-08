import { Fragment } from "react";
import Github from "../../../assets/Navbar/Github.svg";
import Linkedin from "../../../assets/Navbar/linkedin.svg";
import Discord from "../../../assets/about/Discord.svg";

const MobileNavbar = ({ currentTabChecker, setIsOpen, isOpen }) => {
  const modalToggle = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <div
        className="flex flex-col justify-between text-white mobile-navbar absolute"
        style={{
          top: "100%",
          height: "100vh",
          width: "100%",
          backgroundColor: "hsl(218 12% 18%)",
          zIndex: 10000000,
        }}
      >
        <ul className="tab-links-mobile">
          <li
            className={`px-4 text-white my-4 opacity-70  ${
              currentTabChecker("/") ? "opacity-100" : ""
            }  hover:opacity-100  transition-opacity duration-200 active`}
            style={{ fontWeight: "400", fontSize: "25px" }}
            onClick={modalToggle}
          >
            <a href="/">
              <span style={{ color: "#c778dd" }}>#</span>home
            </a>
          </li>
          <li
            className={`px-4 text-white my-4 ${
              currentTabChecker("/works")
                ? "opacity-100"
                : ""
            } opacity-70 hover:opacity-100  transition-opacity duration-200`}
            style={{ fontWeight: "400", fontSize: "25px" }}
            onClick={modalToggle}
          >
            <a href="/works">
              <span style={{ color: "#c778dd" }}>#</span>works
            </a>
          </li>
          <li
            className={`px-4 text-white my-4 ${
              currentTabChecker("/about")
                ? "opacity-100"
                : ""
            } opacity-70 hover:opacity-100  transition-opacity duration-200`}
            style={{ fontWeight: "400", fontSize: "25px" }}
            onClick={modalToggle}
          >
            <a href="/about">
              <span style={{ color: "#c778dd" }}>#</span>about-me
            </a>
          </li>
        </ul>
        <div
          className="logos flex flex-row place-content-center"
          style={{ height: "10%", marginBottom: "30%" }}
        >
          <a href="https://github.com/barman-ayush/">
            <img src={Github} className="mx-3" style={{ height: "60px" }} />
          </a>
          <a href="https://discord.gg/vMuNx2JN">
            <img src={Discord} className="mx-3" style={{ height: "60px" }} />
          </a>
          <a href="https://linkedin.com/in/ayush-barman-4856b3229/">
            <img src={Linkedin} className="mx-3 mt-2" style={{ height: "40px" }} />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;

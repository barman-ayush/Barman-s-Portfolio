import { Fragment } from "react";
import "./Footer.css";
import Logo from "../../assets/Navbar/Logo.svg";
import discord from "../../assets/about/Discord.svg";
import Linkedin from "../../assets/Navbar/linkedin.svg";

const Footer = () => {
  return (
    <Fragment>
      <section
        className="lower-footer"
        style={{
          marginTop: "5%",
          borderTop: "1px white solid",
          width: "100%",
        }}
      >
        <div className="footer-container flex flex-wrap justify-between">
          <div className="left-footer-cont">
            <div className="left-footer-title flex justify-between">
              <a href="/">
                <div className="logo-component-footer flex flex-row pt-3">
                  <img src={Logo} width={16} height={16} className="mr-2" />
                  <p className="text-white">Ayush</p>
                </div>
              </a>
              <a
                href="mailto:barmanayush2980@gmail.com"
                className="email-footer ml-2 text-white opacity-70 hover:opacity-100"
                style={{ paddingTop: "4%" }}
              >
                {" "}
                barmanayush2980@gmail.com
              </a>
            </div>
            <div className="left-footer-body text-white my-4">
              Web Developer based in India.
            </div>
          </div>
          <div
            className="right-footer-cont text-white "
            style={{ marginBottom: "10%" }}
          >
            <h1>Media</h1>
            <div className="icons flex ml-1">
              <a href="https://discord.gg/vMuNx2JN">
                <img
                  src={discord}
                  className="mx-1 hover:opacity-100 opacity-70 hover:cursor-pointer"
                />
              </a>
              <a href="https://linkedin.com/in/ayush-barman-4856b3229/">
                <img
                  className="cursor-pointer ml-2 mt-1"
                  src={Linkedin}
                  style={{ height: "22px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;

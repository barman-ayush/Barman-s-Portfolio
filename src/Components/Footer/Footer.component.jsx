import { Fragment } from "react";
import "./Footer.styles.css";
import MyLogo from "../Logo/Logo.component";
import discord from "../../assets/about/Discord.svg";

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
              <MyLogo />
              <a
                className="email-footer mx-4 text-white opacity-70 hover:opacity-100"
                style={{ paddingTop: "4%" }}
              >
                {" "}
                barmanayush2980@gmail.com
              </a>
            </div>
            <div className="left-footer-body text-white my-4 mx-4">
              Web and Andriod Developer based in India.
            </div>
          </div>
          <div className="right-footer-cont text-white">
            <h1>Media</h1>
            <div className="icons flex ml-1">
              <a href="">
                <img
                  src={discord}
                  className="mx-1 hover:opacity-100 opacity-70 hover:cursor-pointer"
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

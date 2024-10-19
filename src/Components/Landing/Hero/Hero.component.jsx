import { Fragment } from "react";
import "./Hero.styles.css";
import Ayush from "../../../assets/Hero/my-image.svg";
import dots from "../../../assets/Hero/Dots.svg";
import Maze from "../../../assets/Hero/Maze.svg";
import BTN from "../../Button/Button.component.jsx";
import Rect from "../../../assets/Hero/Rect.svg";
import FadeIn from "../../../Animation/fadein.component.jsx";

const Hero = () => {
  return (
    <Fragment>
      <section
        className="hero-cont flex flex-row justify-between items-center flex-wrap"
        style={{ gap: "32px" }}
      >
        <div className="hero-written flex flex-col text-white">
          <div className="hero-title py-3">
            Ayush is a <span className="custom-text px-2">Full stack Web</span>
            Developer.
          </div>
          <div className="small-text py-3 ">
            He crafts responsive websites where technologies meet creativity
          </div>
          <BTN text={"Contact Me"} link={"mailto:barmanayush2980@gmail.com"} />
        </div>
        <div className="hero-image-container relative">
          <img
            src={Ayush}
            className="relative z-10"
            width={500}
            style={{ borderBottom: "2px #c778dd solid" }}
          />
          <FadeIn zIndex={"20"}>
            <img
              src={dots}
              className="absolute right-5 pl-2 bottom-0 z-20"
              style={{ paddingBottom: "12%", paddingRight: "6%" }}
            />
          </FadeIn>
          <FadeIn>
            <img src={Maze} className="absolute top-4 left-4 z-0" />
          </FadeIn>
          <div
            className="flex flex-row jsutify-center items-center open-for-work text-white py-3 border-white border-solid border-2 relative z-30 text-center"
            style={{ width: "60%", top: "-2px", margin: "0 20%" }}
          >
            <img className="px-2" src={Rect} alt="" />
            Open for new oppurtunity
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;

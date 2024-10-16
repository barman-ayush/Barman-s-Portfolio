import { Fragment } from "react";
import BTN from "../../Button/Button.component";
import Ayush from "../../../assets/about/about3.png";
import "./About.styles.css";

const About = ({ isBtn = false }) => {
  return (
    <Fragment>
      <div className="flex text-white flex-wrap">
        <div className="left-cont">
          <p className="text-white">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. Transforming my creativity and
            knowledge into a websites has been my passion for over a year. I
            have been helping various clients to establish their presence
            online. I always strive to learn about the newest technologies and
            frameworks.
          </p>
          {isBtn ? <BTN text={"View All ~>"} /> : <></>}
        </div>
        <div className="right-cont">
          <img
            src={Ayush}
            height={507}
            width={339}
            className="relative about-image"
            style={{ borderBottom: "2px solid #C778DD" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
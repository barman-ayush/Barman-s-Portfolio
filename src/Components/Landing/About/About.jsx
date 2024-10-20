import { Fragment } from "react";
import BTN from "../../Button/Button.jsx";
import Ayush from "../../../assets/about/about3.png";
import "./About.css";

const About = ({ isBtn = false }) => {
  return (
    <Fragment>
      <div className="flex text-white flex-wrap">
        <div className="left-cont">
          <p style={{color : "rgb(171, 178, 191)"}}  className=" py-3">
            I'm a pre-final year undergraduate at Indian Institiute Of
            Technology, Dhanbad pursuing Bachelor Of Technology in Computer
            Science And Engineering.
          </p>
          <p style={{color : "rgb(171, 178, 191)"}}  className="">
            I can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences. Transforming my creativity and
            knowledge into a websites has been my passion for over a year. I
            have been helping various clients to establish their presence
            online. I always strive to learn about the newest technologies and
            frameworks.
          </p>
          <p className="py-3" style={{color : "rgb(171, 178, 191)"}}>
            Upcoming SWE Intern '25 @Google
          </p>
          {isBtn ? (
            <BTN text={"View All ~>"} link={"/Barman-s-Portfolio/about"} />
          ) : (
            <></>
          )}
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

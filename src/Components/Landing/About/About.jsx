import { Fragment } from "react";
import BTN from "../../Button/Button.jsx";
import Ayush from "../../../assets/about/ayush.png";

const About = ({ isBtn = false }) => {
  return (
    <Fragment>
      <div className="flex text-white flex-wrap flex-col md:flex-row">
        <div className="left-cont w-full md:w-1/2 md:pr-8 md:px-0 px-4">
          <p style={{color : "rgb(171, 178, 191)"}} className="py-3">
            I'm a pre-final year undergraduate at Indian Institiute Of
            Technology, Dhanbad pursuing Bachelor Of Technology in Computer
            Science And Engineering.
          </p>
          <p style={{color : "rgb(171, 178, 191)"}}>
            I can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences. Transforming my creativity and
            knowledge into a website has been my passion for over a year. I
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
        <div className="right-cont relative w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0" style={{height : "30vh"}}>
          <img
            src={Ayush}
            height={507}
            width={339}
            className="about-image absolute"
            style={{ borderBottom: "2px solid #C778DD" , top : "-50%" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
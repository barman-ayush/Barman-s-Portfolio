import { Fragment } from "react";
import PageTemplate from "../PageTemplate/PageTemplate.jsx";
import About from "../Landing/About/About.jsx";
import "./aboutPage.css";
import Footer from "../Footer/Footer.jsx";
import Section from "../Landing/SectionTemplate/Section.jsx";
import Skill from "./Skills/Skills.jsx";

const AboutPage = () => {
  return (
    <Fragment>
      <div
        className="flex flex-col flex-1"
        style={{
          margin: "0% auto",
          maxWidth: "1024px",
          marginTop: "40px",
          gap: "80px",
        }}
      >
        <PageTemplate heading={"about-me"} subHeading={"Who am i ?"} />
        <About/>
        <Section component={Skill} view={false} heading={"skills"} Flexdirection={"row"} />
        
      </div>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;

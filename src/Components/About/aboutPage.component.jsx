import { Fragment } from "react";
import PageTemplate from "../PageTemplate/PageTemplate.component.jsx";
import About from "../Landing/About/About.component.jsx";
import "./aboutPage.styles.css";
import Footer from "../Footer/Footer.component.jsx";
import Section from "../Landing/SectionTemplate/Section.component.jsx";
import Skill from "./Skills/Skills.component.jsx";

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

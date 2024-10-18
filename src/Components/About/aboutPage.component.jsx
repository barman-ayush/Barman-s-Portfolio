import { Fragment } from "react";
import PageTemplate from "../PageTemplate/PageTemplate.component";
import About from "../Landing/About/About.component";
import "./aboutPage.styles.css";
import Footer from "../Footer/Footer.component";
import Section from "../Landing/SectionTemplate/Section.component";
import Skill from "./Skills/Skills.component";
import Acheivement from "./Acheivements/Acheivements.component";

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
        <Section component={Skill} view={false} heading={"skills"} Flexdirection={"row"} />
        
      </div>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;

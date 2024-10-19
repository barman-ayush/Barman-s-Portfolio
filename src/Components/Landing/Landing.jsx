import { Fragment } from "react";
import Hero from "./Hero/Hero.jsx";
import Quote from "./Quote/Quote.jsx";
import ProjectSection from "./Project/Project.jsx";
import Section from "./SectionTemplate/Section.jsx";
import Skills from "./Skills/Skills.jsx";
import about from "./About/About.jsx";
import contact from "./contact/contact.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Landing.styles.css"

const LandingPage = () => {
  return (
    <Fragment>
      <div className="top-box-hero flex flex-col items-center flex-1" style={{margin : "0% auto" ,maxWidth : "1024px" , marginTop : "112px" , gap : "112px"}}>
        <Hero />
        <Quote />
        <Section
          component={ProjectSection}
          link={"/works"}
          view={true}
          heading={"projects"}
          Flexdirection={"col"}
        />
        <Section component={Skills} view={false} heading={"skills"} Flexdirection={"row"} />
        <Section component={about}  view={false} isBtn={true} heading={"about"} Flexdirection={"row"} />
        <Section component={contact} view={false} heading={"contacts"} Flexdirection={"row"} />
      </div>
        <Footer/>
    </Fragment>
  );
};

export default LandingPage;

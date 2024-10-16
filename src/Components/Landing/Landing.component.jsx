import { Fragment } from "react";
import Hero from "./Hero/Hero.component";
import Quote from "./Quote/Quote.component";
import ProjectSection from "./Project/Project.component";
import Section from "./SectionTemplate/Section.component";
import Skills from "./Skills/Skills.component";
import about from "./About/About.component";
import contact from "./contact/contact.component";
import Footer from "../Footer/Footer.component";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center flex-1" style={{margin : "0% auto" ,maxWidth : "1024px" , marginTop : "112px" , gap : "112px"}}>
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

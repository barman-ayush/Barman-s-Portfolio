import { Fragment } from "react";
import Hero from "./Hero/Hero.component";
import Quote from "./Quote/Quote.component";
import ProjectSection from "./Project/Project.component";
import Section from "./SectionTemplate/Section.component";
import Skills from "./Skills/Skills.component";

const LandingPage = () => {
    return(
        <Fragment>
            <Hero/>
            <Quote/>
            <Section component={ProjectSection} link={"/project"} view={true} heading={"projects"} />
            <Section component={Skills} view={false} heading={"skills"} />
            <Section component={ProjectSection} view={false} heading={"abouts"} />
            <Section component={ProjectSection} view={false} heading={"contacts"} />
        </Fragment>
    )
}

export default LandingPage;
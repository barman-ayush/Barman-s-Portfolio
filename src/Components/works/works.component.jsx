import { Fragment } from "react";
import PageTemplate from "../PageTemplate/PageTemplate.component";
import Footer from "../Footer/Footer.component";
import Section from "../Landing/SectionTemplate/Section.component";
import Decent from "./Decent/decent.component";
import Small from "./small/small.component";

const Works = () => {
  const componentArray = [];

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
        <PageTemplate
          heading={"projects"}
          subHeading={"All of my projects"}
          components={componentArray}
        />
        <Section component={Decent} view={false} heading={"decent"} Flexdirection={"row"} />
        <Section component={Small} view={false} heading={"small"} Flexdirection={"row"} />
        
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Works;

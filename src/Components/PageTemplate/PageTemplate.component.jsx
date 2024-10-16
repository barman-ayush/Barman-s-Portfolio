import { Fragment } from "react";
import "./PageTemplate.styles.css";

const PageTemplate = ({ heading, subHeading }) => {
  return (
    <Fragment>
      <div className="path text-white">
        <h1 className="heading-before realtive"> {heading} </h1>
        <p className="mx-2 my-4" style={{ color: "hsl(219 14% 71%)" }}>
          {subHeading}
        </p>
      </div>
    </Fragment>
  );
};

export default PageTemplate;

// Section

import { Fragment } from "react";
import "./Section.styles.css"

const Section = ({component : Component , heading , view , link}) => {
  return (
    <Fragment>
      <section className="flex flex-col ">
        <div
          className="relative flex flex-row px-2 justify-between"
          style={{ margin: "10%" , marginBottom : "5%" }}
        >
          <h2 className="h2 text-white ml-4">{heading}</h2>
          {view ? (
            <a
              style={{ textDecoration: "underline" }}
              href={link}
              className="project-link text-white mr-4"
            >
              View ~~{`>`}
            </a>
          ) : (
            <></>
          )}
        </div>
        <Component/>
      </section>
    </Fragment>
  );
};

export default Section;

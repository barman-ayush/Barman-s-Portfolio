import { Fragment } from "react";
import "./Section.styles.css"

const Section = ({component : Component , heading , view , link , Flexdirection, isBtn}) => {
  return (
    <Fragment>
      <section className={`flex flex-${Flexdirection} flex-wrap justify-between items-center`} style={{gap : "32px"}}>
        <div
          className="relative flex flex-row px-2 justify-between"
          style={{marginBottom : "5%" }}
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
        <Component isBtn={isBtn}/>
      </section>
    </Fragment>
  );
};

export default Section;

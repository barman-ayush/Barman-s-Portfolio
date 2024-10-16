import { Fragment } from "react";
import BTN from "../Button/Button.component";

const ProjectCard = ({ TechStack, heading, subheading, image }) => {
  console.log(image)
  return (
    <Fragment>
      <div
        className="parent-cont text-white mx-1 my-4"
        style={{ border: "1px solid white" }}
      >
        <img src={image} style={{ maxWidth: "350px" }} />
        <ul
          className="tech-stack flex flex-row justify-start mb-3"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          {TechStack.map((e) => {
            return <li className="mx-2 my-2">{e}</li>;
          })}
        </ul>
        <div className="project-details mx-3 my-4">
          <h1
            className="heading"
            style={{ fontSize: "24px", fontWeight: "500" }}
          >
            {heading}
          </h1>
          <p
            className="sub-heading my-2"
            style={{ maxWidth: "300px", color: "hsl(219 14% 71%)" }}
          >
            {subheading}
          </p>
        </div>
        <div className="btn-cont mx-3 flex flex-wrap flex-row">
          <BTN link={""} text={"Live =>"} />
          <BTN link={""} text={"GitHub =>"} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectCard;

import { Fragment } from "react";
import BTN from "../Button/Button.jsx";
import "./ProjectCard.css";

const ProjectCard = ({
  TechStack,
  heading,
  subheading,
  image,
  LiveLink,
  Github,
}) => {
  console.log(LiveLink);
  return (
    <Fragment>
      <div
        className="parent-cont text-white"
        style={{ border: "1px solid white" }}
      >
        <img src={image} style={{ width: "100%" }} />
        <ul
          className="tech-stack flex flex-row flex-wrap justify-start mb-3"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          {TechStack.map((e) => {
            return (
              <li className="mx-1 my-2">
                <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  {e}
                </span>
              </li>
            );
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
          <BTN link={LiveLink} text={"Live =>"} />
          <BTN link={Github} text={"GitHub =>"} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectCard;

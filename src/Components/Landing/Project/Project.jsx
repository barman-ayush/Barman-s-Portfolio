import { Fragment } from "react";
import "./Project.css";
import getGeeks from "../../../assets/Project/getGeeks.png"
import cerebroScan from "../../../assets/Project/cerebroScan.jpeg"
import concetto from "../../../assets/Project/concetto.png"
import JsonData from "../../../json/Project/decent.json"
import ProjectCard from "../../Cards/ProjectCard.jsx";

const imageMap = {
  getGeeks , cerebroScan , concetto
}

const ProjectSection = () => {
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
        <div
          className="flex flex-wrap"
          style={{ marginBottom: "10%", width: "100%" }}
        >
          {JsonData.map((e, index) => {
            const image = imageMap[e.img];
            return <ProjectCard {...e} image={image} />;
          })}
          {/* <ProjectCard image={getGeeks} TechStack={["EJS" , "Node" , "Express"]} heading={"getGeeks"} subheading={"A web app for competitive programmers"} /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectSection;

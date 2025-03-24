import { Fragment } from "react";
import ProjectCard from "../../Cards/ProjectCard.jsx";
import "../Decent/decent.css"
import JsonData from "../../../json/Project/small.json"


const Small = () => {
  console.log(JsonData)
  return (
    <Fragment>
      <div
        className="flex flex-wrap mx-2"
        style={{ marginBottom: "10%", width: "100%" }}
      >
        {JsonData.map( (e , index) => {
          return <ProjectCard {...e}/>
        } )}
      </div>
    </Fragment>
  );
};

export default Small;

import { Fragment } from "react";
import ProjectCard from "../../Cards/ProjectCard.component.jsx";
import "../Decent/decent.styles.css"
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
        {/* <ProjectCard image={getGeeks} TechStack={["EJS" , "Node" , "Express"]} heading={"getGeeks"} subheading={"A web app for competitive programmers"} /> */}
      </div>
    </Fragment>
  );
};

export default Small;

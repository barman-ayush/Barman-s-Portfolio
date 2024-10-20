import { Fragment } from "react";
import ProjectCard from "../../Cards/ProjectCard.jsx";
import "./decent.css"
import JsonData from "../../../json/Project/decent.json"
import getGeeks from "../../../assets/Project/getGeeks.png"
import cerebroScan from "../../../assets/Project/cerebroScan.jpeg"
import concetto from "../../../assets/Project/concetto.png"


const imageMap = {
  getGeeks , cerebroScan , concetto
}


const Decent = () => {
  console.log(JsonData)
  return (
    <Fragment>
      <div
        className="flex flex-wrap mx-2"
        style={{ marginBottom: "10%", width: "100%" }}
      >
        {JsonData.map( (e , index) => {
          const image = imageMap[e.img]
          return <ProjectCard {...e} image={image}/>
        } )}
        {/* <ProjectCard image={getGeeks} TechStack={["EJS" , "Node" , "Express"]} heading={"getGeeks"} subheading={"A web app for competitive programmers"} /> */}
      </div>
    </Fragment>
  );
};

export default Decent;

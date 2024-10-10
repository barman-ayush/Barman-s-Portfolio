import { Fragment } from "react";

const SkillCard = ({ heading, items }) => {
  return (
    <Fragment>
      <div className="skill-card text-white mx-2 my-2 py-2" style={{border : "1px solid white" , width : "40%"}}  >
        <div className="skill-heading px-2" style={{borderBottom : "1px solid white" , paddingBottom : "3px"}} >{heading}</div>
        <ul className="skill-list flex justify-start flex-wrap" style={{gap : "8px" , color : "gray"}}>
          {items.map((e, index) => {
            return (<li className="mx-2"  key={index}>{e}</li>)
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default SkillCard;
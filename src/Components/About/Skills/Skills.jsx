import { Fragment, useEffect , useState } from "react";
import SkillCard from "../../Cards/SkillCards.jsx";
import SkillData from "../../../json/Skills/Skills.json"

const Skills = () => {
  const {Languages , Frameworks , Others , Databases}  = SkillData

  return (
    <Fragment>
      <div
        className="flex flex-wrap "
        style={{ marginBottom: "10%", width: "100%" }}
      >
        <div
          className="right-container flex flex-wrap"
          style={{ width: "100%" }}
        >
          <SkillCard
            heading={"Languages"}
            items={Languages}
            divWidth={"35%"}
            divHeight={"50%"}
          />
          <SkillCard
            divWidth={"35%"}
            divHeight={"50%"}
            heading={"Databases"}
            items={Databases}
          />
          <SkillCard
            heading={"Frameworks"}
            items={Frameworks}
            divWidth={"30%"}
            divHeight={"50%"}
          />
          <SkillCard
            heading={"Other"}
            items={Others}
            divWidth={"40%"}
            divHeight={"50%"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

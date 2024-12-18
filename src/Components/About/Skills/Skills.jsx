import { Fragment, useEffect , useState } from "react";
import SkillCard from "../../Cards/SkillCards.jsx";

const Skills = () => {
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
            items={["JavaScript", "C++", "Python"]}
            divWidth={"35%"}
            divHeight={"50%"}
          />
          <SkillCard
            divWidth={"35%"}
            divHeight={"50%"}
            heading={"Databases"}
            items={["MongoDB", "PostgreSQL"]}
          />
          <SkillCard
            heading={"Frameworks"}
            items={["React", "Express", "Flask"]}
            divWidth={"30%"}
            divHeight={"50%"}
          />
          <SkillCard
            heading={"Other"}
            items={[
              "HTML",
              "CSS",
              "Pug",
              "EJS",
              "Bootstrap",
              "TailwindCSS",
              "FramerMotion",
            ]}
            divWidth={"40%"}
            divHeight={"50%"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

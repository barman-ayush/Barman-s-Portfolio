import { Fragment } from "react";
import SkillCard from "../../Cards/SkillCards.component.jsx";
import "./Skill.styles.css";
import rect1 from "../../../assets/skills/rect-1.svg";
import Frame1 from "../../../assets/skills/Frame 27.svg";
import FadeIn from "../../../Animation/fadein.component.jsx";

const Skills = () => {
  return (
    <Fragment>
      <div
        className="flex  flex-wrap justify-center"
        style={{ marginBottom: "10%" }}
      >
        <div className="left-container relative" style={{ margin: "5%" }}>
          <FadeIn>
            <div className="rect1 absolute right-0 ">
              <img src={rect1} />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="Frame absolute top-0" style={{ left: "-20%" }}>
              <img src={Frame1} />
            </div>
          </FadeIn>
          <FadeIn>
            <div
              className="Frame absolute"
              style={{ left: "30%", top: "100px" }}
            >
              <img src={Frame1} />
            </div>
          </FadeIn>
        </div>
        <div className="right-container flex justify-center items-center flex-wrap">
          <SkillCard
            heading={"Languages"}
            items={["JavaScript", "C++", "Python"]}
          />
          <SkillCard heading={"Databases"} items={["MongoDB", "PostgreSQL"]} />
          <SkillCard
            heading={"Frameworks"}
            items={["React", "Express", "Flask"]}
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
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

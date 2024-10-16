import { Fragment } from "react";
import SkillCard from "../../Cards/SkillCards.component";
import "./Skill.styles.css";

const Skills = () => {
  return (
    <Fragment>
      <div
        className="flex  flex-wrap justify-center"
        style={{ marginBottom: "10%" }}
      >
        <div className="left-container" style={{ margin: "5%" }}>
          {/* <div className="rect1 absolute right-0">
                        <img src={rect1} />
                    </div>
                    <div className="Frame absolute top-0" style={{left : "-20%"}}>
                        <img src={Frame1} />
                    </div>
                    <div className="Frame absolute" style={{left : "30%" , top : "100px"}}>
                        <img src={Frame1} />
                    </div> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            provident deserunt, nesciunt iste repellendus totam doloremque
            iusto, sequi quod perferendis eaque saepe vero unde. A voluptates
            tempore sed totam pariatur qui architecto nam? Aut.
          </p>
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
          <SkillCard heading={"Other"} items={["HTML", "CSS", "Pug", "EJS" , "Bootstrap" , "TailwindCSS" , "FramerMotion"]} />
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

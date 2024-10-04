import { Fragment } from "react";
import rect1 from "../../../assets/skills/rect-1.svg"
import Reactangle23 from "../../../assets/skills/Rectangle 23.svg"
import Reactangle24 from "../../../assets/skills/Rectangle 24.svg"
import Frame1 from "../../../assets/skills/Frame 27.svg"

const Skills = () => {
    return(
        <Fragment>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="left relative" style={{width : "100%"}} >
                    <div className="rect1 absolute">
                        <img src={rect1} alt="" />
                    </div>
                    <div className="rectangle23 absolute">
                        <img src={Reactangle23} alt="" />
                    </div>
                    <div className="rectangle24 absolute">
                        <img src={Reactangle24} alt="" />
                    </div>
                    <div className="Frame absolute">
                        <img src={Frame1} alt="" />
                    </div>

                </div>
                <div className="right" >right</div>
            </div>
        </Fragment>
    )
}

export default Skills;
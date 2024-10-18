import { Fragment } from "react";
import Line from "../../assets/Navbar/SideLine.svg"
import GitHub from "../../assets/Navbar/Github.svg"
import "./SideLine.styles.css"

const SideLine =() => {
    // add hover func
    // add links 
    // add github
    return(
        <Fragment>
            <section className="left-deco flex flex-col absolute mx-4 top-0 z-40 left-0">
                <img src={Line} style={{height : "250px"}}/>
                <img src={GitHub} style={{height : "35px"}} />
                <img src={GitHub} style={{height : "35px"}} />
            </section>
        </Fragment>
    )
}

export default SideLine;
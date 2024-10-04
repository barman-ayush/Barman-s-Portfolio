import { Fragment } from "react";
import Line from "../../assets/Navbar/SideLine.svg"
import GitHub from "../../assets/Navbar/Github.svg"

const SideLine =() => {
    // add hover func
    // add links 
    // add github
    return(
        <Fragment>
            <section className="flex flex-col absolute mx-4">
                <img src={Line} style={{height : "250px"}}/>
                <img src={GitHub} style={{height : "35px"}} />
                <img src={GitHub} style={{height : "35px"}} />
            </section>
        </Fragment>
    )
}

export default SideLine;
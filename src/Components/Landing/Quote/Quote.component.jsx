import { Fragment } from "react";
import TopComma from "../../../assets/Quote/TopComma.svg";
import rect26 from "../../../assets/Quote/Rectangle-26.svg";

const Quote = () => {
    // Name of Author 
  return (
    <Fragment>
      <section
        className="flex flex-row justify-center items-center relative"
        style={{ marginTop: "10%" }}
      >
        <div className="rect-26 absolute right-0">
          <img src={rect26} alt="" />

        </div>
        <div className="text-white relative" style={{ width: "50%" }}>
          <div className="top-comma absolute left-2" style={{ top: "-13px" }}>
            <img src={TopComma} alt="" />
          </div>
          <div
            className="top-comma absolute right-2"
            style={{ bottom: "-13px" }}
          >
            <img src={TopComma} alt="" />
          </div>
          <div
            className="Quote py-4 px-4 border-solid border-white border-2"
            style={{
              maxWidth: "100%",
              padding: "5% 5%",
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            With great power comes great electricity bill
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Quote;

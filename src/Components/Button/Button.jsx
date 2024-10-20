import { Fragment } from "react";
import "./Button.css";

const BTN = ({link , text}) => {
  return (
    <Fragment>
      <div
        className="py-2 my-4 rounded-md cursor-pointer flex justify-center btn-custom"
        style={{ border: "solid 2px #c778dd", width: "30%" , marginLeft : "0.3rem" , marginRight:  "0.5rem" }}
      >
        <a href={link}> {text}</a>
      </div>
    </Fragment>
  );
};

export default BTN;

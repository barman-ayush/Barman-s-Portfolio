import { Fragment } from "react";
import "./Button.styles.css";

const BTN = ({link , text}) => {
  return (
    <Fragment>
      <div
        className="px-4 py-2 my-4 rounded-md cursor-pointer flex justify-center btn-custom"
        style={{ border: "solid 2px #c778dd", width: "30%" }}
      >
        <a href={link}> {text}</a>
      </div>
    </Fragment>
  );
};

export default BTN;

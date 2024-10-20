import { Fragment } from "react";
import Contact from "../../Cards/Contact-card.jsx";

const contact = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap text-white justify-between">
        <div className="left-cont">
          <p className="text-white">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="right-cont mx-4">
          <Contact/>
        </div>
      </div>
    </Fragment>
  );
};

export default contact;

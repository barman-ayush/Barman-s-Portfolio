import { Fragment } from "react";
import Contact from "../../Cards/Contact-card.jsx";

const contact = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap text-white justify-between mt-4">
        <div className="left-cont w-full md:w-1/2 md:pr-8 md:px-0 px-4">
          <p className="text-white md:mx-0 mx-4">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="right-cont w-full md:w-1/2 md:pr-8 md:px-0 px-4 md:mx-0 mx-4">
          <Contact/>
        </div>
      </div>
    </Fragment>
  );
};

export default contact;

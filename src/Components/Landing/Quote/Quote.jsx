import { Fragment } from "react";
import "./Quote.css"

const Quote = () => {
    // Name of Author 
  return (
    <Fragment>
      <figure className="relative text-white quote" style={{border : "gray 1px solid"}}>
        <blockquote className="quote-data">With great power comes great electricity bill</blockquote>
      </figure>
    </Fragment>
  );
};

export default Quote;

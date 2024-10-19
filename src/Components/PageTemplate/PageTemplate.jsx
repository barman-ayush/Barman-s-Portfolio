import { Fragment } from "react";
import { motion } from "framer-motion";
import "./PageTemplate.styles.css";

const PageTemplate = ({ heading, subHeading }) => {
  return (
    <Fragment>
      <div className="path text-white">
        <div className="total-text-container flex flex-row">
          <motion.span
            className="slash"
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            /
          </motion.span>

          <motion.h1
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="heading-before relative"
          >
            {heading}
          </motion.h1>
        </div>

        {/* Subheading paragraph */}
        <p className="mx-2 my-4" style={{ color: "hsl(219 14% 71%)" }}>
          {subHeading}
        </p>
      </div>
    </Fragment>
  );
};

export default PageTemplate;

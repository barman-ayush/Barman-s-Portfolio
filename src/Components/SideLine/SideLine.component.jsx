import { Fragment } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Line from "../../assets/Navbar/SideLine.svg";
import GitHub from "../../assets/Navbar/Github.svg";
import "./SideLine.styles.css";

const SideLine = () => {
  // Animation variants
  const lineAnimation = {
    initial: { height: "0px" },
    animate: { height: "250px" },
    exit: { height: "0px" },
  };

  const iconAnimation = {
    initial: { x: "-50%", opacity: 0 },
    animate: { x: "0%", opacity: 1 },
  };

  return (
    <Fragment>
      <section className="left-deco flex flex-col absolute mx-4 top-0 z-40 left-0">
        {/* Line with motion */}
        <motion.img
          src={Line}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={lineAnimation}
          transition={{ duration: 1 }} // Duration for line growth
        />

        {/* GitHub icons with motion */}
        <motion.img
        className="cursor-pointer"
        src={GitHub}
        style={{ height: "35px" }}
        initial="initial"
        animate="animate"
        variants={iconAnimation}
        transition={{ duration: 0.5, delay: 1 }} // Delay for icon appearance
        />
        <motion.img
          className="cursor-pointer"
          src={GitHub}
          style={{ height: "35px" }}
          initial="initial"
          animate="animate"
          variants={iconAnimation}
          transition={{ duration: 0.5, delay: 1.2 }} // Staggering delay
          />
      </section>
    </Fragment>
  );
};

export default SideLine;

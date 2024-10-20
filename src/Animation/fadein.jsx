import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, duration = 1, zIndex = 1 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,   // Trigger animation only once when in view
    threshold: 0.1,      // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: duration, ease: "easeInOut" }}
      style={{ zIndex: zIndex }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

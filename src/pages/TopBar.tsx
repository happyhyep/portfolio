import React from "react";
import { motion, useScroll } from "framer-motion";

const TopBar = (props: any) => {
  const { scrollYProgress } = useScroll();
  const color = props.color;
  return (
    <motion.div
      className="bar"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "5px",
        transformOrigin: 0,
        transform: "translate3d(0, 0, 0)",
        background: color,
      }}
    />
  );
};

export default TopBar;

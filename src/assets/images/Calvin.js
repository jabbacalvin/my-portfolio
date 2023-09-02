import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 0,
    scale: 0,
    transition: {
      delay: 3.4,
      duration: 0.3,
    },
  },
};

const svg = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.5,
    transition: {
      when: "afterChildren",
      duration: 0.1,
      delay: 3,
      staggerChildren: 0.2,
    },
  },
};

const path = (strokeDashoffset) => ({
  hidden: { strokeDashoffset },
  visible: {
    strokeDashoffset: 0,
  },
});

const pathProps = {
  variants: path(200),
  transition: {
    duration: 1,
  },
};

const rectProps = {
  variants: path(866),
  transition: {
    duration: 1.5,
  },
};

const Calvin = (props) => {
  return (
    <>
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 378.9 110.9"
          variants={svg}
          initial="hidden"
          animate="visible"
          {...props}
        >
          <clipPath id="c">
            <path d="M25.9 80.1V29.7h2.9l18.3 27.6 18.2-27.6h2.8v50.4h-2.7V34.2L47.7 60.8h-1.4L28.6 34.3V80h-2.7z" />
          </clipPath>
          <g
            fill="none"
            stroke="#fff"
            strokeWidth={7}
            strokeMiterlimit={10}
            strokeDasharray={200}
          >
            <motion.path
              {...pathProps}
              clipPath="url(#c)"
              d="M25.9 82.3V31.9c7 9.9 13.9 19.8 20.9 29.8 6.2-9.9 12.3-19.8 18.5-29.8.5 16.5.9 32.9 1.4 49.4"
            />
          </g>
          <motion.path
            {...rectProps}
            strokeWidth={2}
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            d="M12.7 14.8h349.7v83.3H12.7z"
            strokeDasharray={866}
            strokeDashoffset={866}
          />
        </motion.svg>
      </motion.div>
    </>
  );
};

export default Calvin;

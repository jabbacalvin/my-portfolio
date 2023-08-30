import { motion } from "framer-motion";
import React from "react";
import useClasses from "../useClasses";

const ProgressBar = ({ value }) => {
  const classes = useClasses(styles({ value }));
  return (
    <div className={classes.container}>
      <motion.div
        intial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        className={classes.progress}
      ></motion.div>
    </div>
  );
};

const styles = ({ value, theme }) => ({
  container: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgb(60,60,60)",
  },
  progress: {
    // width:"50%",
    height: "1px",
    backgroundColor: theme.palette.primary.main,
  },
});

export default ProgressBar;

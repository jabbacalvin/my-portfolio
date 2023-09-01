import React, { useContext } from "react";
import { motion } from "framer-motion";
import LoaderContext from "../contexts/loaderContext";
import useClasses from "../components/useClasses";

const LoaderContainer = ({ children }) => {
  const { setIsLoading } = useContext(LoaderContext);
  const classes = useClasses(styles);
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: "-100vh",
      }}
      transition={{
        delay: 4.2,
        duration: 0.3,
      }}
      onAnimationComplete={(definition) => {
        setIsLoading(false);
      }}
      className={classes.container}
    >
      <div className={classes.content}>{children}</div>
    </motion.div>
  );
};

const styles = (theme) => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#071724",
    zIndex: 10000,
  },
  content: {
    margin: "0 auto",
  },
});

export default LoaderContainer;

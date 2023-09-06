import React from "react";
import useClasses from "./useClasses";

const Divider = ({ fullWidth, width, backgroundColor, ...rest }) => {
  const classes = useClasses(styles(fullWidth, width, backgroundColor));
  return <div className={classes.root} {...rest}></div>;
};

const styles = (fullWidth, width, backgroundColor) => ({
  root: {
    display: "inline",
    width: fullWidth ? "100%" : width,
    height: "1px",
    backgroundColor: backgroundColor,
  },
});

export default Divider;

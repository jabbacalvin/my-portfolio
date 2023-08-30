import React from "react";
import useClasses from "./useClasses";

const Divider = ({ fullWidth, width, ...rest }) => {
  const classes = useClasses(styles({ fullWidth, width }));
  return <div className={classes.root} {...rest}></div>;
};

const styles = ({ fullWidth, width }) => ({
  root: {
    display: "inline",
    width: fullWidth ? "100%" : width,
    height: "1px",
    backgroundColor: "red",
  },
});

export default Divider;

import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logo.png";
import useClasses from "../useClasses";

const Logo = ({ setHomeIsActive, ...rest }) => {
  const classes = useClasses(styles);
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      onSetActive={() => setHomeIsActive(true)}
      onSetInactive={() => setHomeIsActive(false)}
      className={classes.root}
    >
      <img src={logo} alt="Home" width="150px" />
    </Link>
  );
};

const styles = (theme) => ({
  root: {
    cursor: "pointer",
  },
});

export default Logo;

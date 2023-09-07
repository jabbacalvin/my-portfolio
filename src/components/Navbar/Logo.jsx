import React from "react";
import { Link } from "react-scroll";
import logo_dark from "../../assets/images/logo_dark.png";
import logo_light from "../../assets/images/logo_light.png";
import useClasses from "../useClasses";

const Logo = ({ setHomeIsActive, isDarkMode, isMobile }) => {
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
      {isDarkMode ? (
        <img
          src={logo_light}
          alt="Home"
          width="150px"
          style={isMobile ? { marginTop: "8px" } : {}}
        />
      ) : (
        <img
          src={logo_dark}
          alt="Home"
          width="150px"
          style={isMobile ? { marginTop: "8px" } : {}}
        />
      )}
    </Link>
  );
};

const styles = (theme) => ({
  root: {
    cursor: "pointer",
  },
});

export default Logo;

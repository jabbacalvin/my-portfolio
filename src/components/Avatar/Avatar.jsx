import React from "react";
import AvatarImg from "../../assets/images/avatar.jpg";
import useClasses from "../useClasses";

const Avatar = () => {
  const classes = useClasses(styles);
  return <img src={AvatarImg} alt="Calvin Hsu" className={classes.avatarImg} />;
};

const styles = (theme) => ({
  avatarImg: {
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
    // width: "270px",
    // height: "270px",
    objectFit: "cover",
    boxShadow: theme.shadows[10],
  },
});

export default Avatar;

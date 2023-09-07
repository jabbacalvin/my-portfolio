import React from "react";
import { useTheme } from "@mui/material";
import VideoMask from "./VideoMask";
import useClasses from "../useClasses";
import Video from "../../assets/images/gradient.mp4";

const VideoLogo = (props) => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  return (
    <div className={classes.wrapper} {...props}>
      <VideoMask className={classes.mask} />
      <video autoPlay muted loop preload="auto" className={classes.video}>
        <source src={Video} />
      </video>
    </div>
  );
};

const styles = (theme) => ({
  wrapper: {
    overflow: "hidden",
    position: "relative",
    width: "450px",
    height: "80px",
    [theme.breakpoints.down("xs")]: {
      width: "230px",
      height: "53px",
    },
  },
  mask: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "450px",
    [theme.breakpoints.down("xs")]: {
      width: "230px",
      height: "52px",
    },
  },
  video: {
    zIndex: 0,
    position: "absolute",
    top: 0,
    left: "1px",
    right: "1px",
    width: "445px",
    height: "255px",
    [theme.breakpoints.down("xs")]: {
      width: "228px",
      height: "52px",
    },
  },
});

export default VideoLogo;

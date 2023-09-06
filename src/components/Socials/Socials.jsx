import React, { useContext, useEffect } from "react";
import { useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import IconBtn from "../IconBtn";
import DarkModeSwitcher from "../DarkModeSwitcher";
import loaderContext from "../../contexts/loaderContext";
import useClasses from "../useClasses";

const Social = ({ mobile }) => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.8 + i * 0.1,
        },
      }));
    } else {
      controls.start({ opacity: 0, y: 0 });
    }
  }, [isLoading, controls]);

  if (mobile) {
    return (
      <div className={classes.mobileWrapper}>
        <IconBtn icon={GitHub} m={1} href="https://github.com/jabbacalvin" />
        <IconBtn
          icon={LinkedIn}
          m={1}
          href="https://www.linkedin.com/in/hsucalvin/"
        />
        <IconBtn icon={Email} m={1} href="mailto:jabbacalvin@gmail.com" />
      </div>
    );
  } else {
    return (
      <motion.div className={classes.wrapper}>
        <motion.div
          animate={controls}
          custom={0}
          className={classes.socialIcon}
        >
          <IconBtn icon={GitHub} m={1} href="https://github.com/jabbacalvin" />
        </motion.div>
        <motion.div
          animate={controls}
          custom={1}
          className={classes.socialIcon}
        >
          <IconBtn
            icon={LinkedIn}
            m={1}
            href="https://www.linkedin.com/in/hsucalvin/"
          />
        </motion.div>
        <motion.div
          animate={controls}
          custom={2}
          className={classes.socialIcon}
        >
          <IconBtn icon={Email} m={1} href="mailto:jabbacalvin@gmail.com" />
        </motion.div>
        <motion.div
          animate={controls}
          custom={3}
          className={classes.socialIcon}
        >
          <DarkModeSwitcher />
        </motion.div>
      </motion.div>
    );
  }
};

const styles = (theme) => ({
  socialIcon: {
    marginBottom: "5px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "fixed",
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    zIndex: 100,
  },
  mobileWrapper: {
    display: "flex",
  },
});

export default Social;

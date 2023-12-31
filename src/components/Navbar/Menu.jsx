import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, Button, Link as MuiLink, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link, Events } from "react-scroll";
import LoaderContext from "../../contexts/loaderContext";
import { useTranslation } from "react-i18next";
import useClasses from "../useClasses";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const AnimatedLink = React.forwardRef((props, ref) => (
  <motion.div ref={ref} custom={props.custom} animate={props.animate}>
    <Link {...smoothScrollProps} {...props} />
  </motion.div>
));

const Menu = ({ homeIsActive }) => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  const [value, setValue] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isLoading } = useContext(LoaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setIsScrolling(true);
    });

    Events.scrollEvent.register("end", (to, element) => {
      setIsScrolling(false);
    });
  });

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.3 },
      }));
    } else {
      controls.start({ opacity: 0, y: -5 });
    }
  }, [isLoading, controls]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const spyHandleChange = (index) => {
    if (!isScrolling) {
      setValue(index);
    }
  };

  useEffect(() => {
    if (homeIsActive) {
      setValue(false);
    }
  }, [homeIsActive]);

  return (
    <div className={classes.wrapper}>
      <Tabs
        className={classes.tabs}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        classes={{ indicator: classes.tabsIndicator }}
      >
        <Tab
          className={classes.tabRoot}
          component={AnimatedLink}
          custom={0}
          animate={controls}
          to="about"
          label={t("menu_about")}
          onSetActive={() => spyHandleChange(0)}
          onSetInactive={() => spyHandleChange(false)}
          disableRipple
        />
        {/* <Tab
          className={classes.tabRoot}
          component={AnimatedLink}
          animate={controls}
          custom={1}
          to="experience"
          label={t("menu_experience")}
          onSetActive={() => spyHandleChange(1)}
          disableRipple
        /> */}
        <Tab
          className={classes.tabRoot}
          component={AnimatedLink}
          animate={controls}
          custom={1}
          to="projects"
          label={t("menu_projects")}
          onSetActive={() => spyHandleChange(1)}
          disableRipple
        />
        <Tab
          className={classes.tabRoot}
          component={AnimatedLink}
          animate={controls}
          custom={2}
          to="contact"
          label={t("menu_contact")}
          onSetActive={() => spyHandleChange(2)}
          disableRipple
        />
      </Tabs>
      <motion.div custom={4} animate={controls}>
        <Button
          component={MuiLink}
          target="_blank"
          href="/resume.pdf"
          variant="outlined"
          color="primary"
          underline="none"
        >
          {t("menu_resume")}
        </Button>
      </motion.div>
    </div>
  );
};

const styles = (theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  tabs: {
    marginRight: theme.spacing(4),
  },
  navMenuItem: {
    marginRight: theme.spacing(1),
  },
  tabRoot: {
    transition: ".2s",
    minWidth: 120,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  tabIndicator: {
    "& > span": {
      maxWidth: 20,
    },
  },
});

export default Menu;

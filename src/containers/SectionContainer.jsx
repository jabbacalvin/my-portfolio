import React, { useEffect } from "react";
import { Container, Typography, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Divider from "../components/Divider";
import useClasses from "../components/useClasses";

const SectionContainer = ({
  children,
  maxWidth,
  full,
  reverse,
  title,
  padding,
  ...rest
}) => {
  const theme = useTheme();
  const classes = useClasses(styles({ full, maxWidth, padding, theme }));
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const [titleRef, titleInView] = useInView();
  const [contentRef, contentInView] = useInView();
  // const [contentStart, setContentStart]=useState(false)

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (contentInView) {
      // setContentStart(true)
      contentControls.start("visible");
    }
  }, [contentControls, contentInView]);

  return (
    <Container component="section" className={classes.container} {...rest}>
      {title && (
        <motion.div
          ref={titleRef}
          animate={titleControls}
          initial="hidden"
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: reverse ? 0 : 0 },
          }}
          className={classes.titleContainer}
        >
          <Divider width="20%" />
          <Typography
            variant="h4"
            color="initial"
            className={classes.title}
            sx={{ ml: 4, mr: 4 }}
          >
            {title}
          </Typography>
          <Divider fullWidth />
        </motion.div>
      )}
      <motion.div
        ref={contentRef}
        animate={contentControls}
        initial="hidden"
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
          when: "beforeChildren",
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

const styles = ({ full, maxWidth, padding, theme }) => ({
  container: {
    paddingTop: padding ? `${padding}px` : "80px",
    paddingBottom: padding ? `${padding}px` : "80px",
  },
  titleContainer: {
    paddingBottom: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  title: {
    // margin: theme.spacing(0, 4),
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  childrenContainer: {
    minHeight: "100%",
  },
});

export default SectionContainer;

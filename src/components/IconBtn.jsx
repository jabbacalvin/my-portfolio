import React from "react";
import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import useClasses from "./useClasses";

const IconBtn = ({ icon: Icon, href, fontSize, ...rest }) => {
  const classes = useClasses(styles({ fontSize }));
  return (
    <Box
      display="inline"
      {...rest}
      component={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Link href={href}>
        <Icon className={classes.icon} />
      </Link>
    </Box>
  );
};

const styles = ({ fontSize, theme }) => ({
  icon: {
    color: theme.palette.text.secondary,
    transition: "0.1s",
    cursor: "pointer",
    fontSize: fontSize ? `${fontSize}px` : "32px",
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
});

export default IconBtn;

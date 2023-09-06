import React from "react";
import { Box, Link, IconButton, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useClasses from "./useClasses";

const IconBtn = ({ icon: IconButton, href, fontSize, ...rest }) => {
  const theme = useTheme();

  return (
    <Box
      display="inline"
      {...rest}
      component={motion.div}
      whileHover={{ scale: 1.1 }}
    >
      <Link href={href} target="_blank">
        <IconButton
          sx={{
            color: theme.palette.text.secondary,
            transition: "0.1s",
            cursor: "pointer",
            fontSize: fontSize ? `${fontSize}px` : "32px",
            "&:hover": {
              color: theme.palette.text.primary,
            },
          }}
        />
      </Link>
    </Box>
  );
};

export default IconBtn;

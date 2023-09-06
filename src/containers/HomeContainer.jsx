import React from "react";
import { Container, useTheme } from "@mui/material";
import useClasses from "../components/useClasses";

const HomeContainer = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: `calc(${theme.spacing(4)}px + ${theme.navbarHeight})`,
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
          paddingTop: theme.navbarHeight,
        },
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default HomeContainer;

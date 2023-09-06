import React from "react";
import {
  Container,
  Typography,
  Divider,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import Social from "../Socials";
import useClasses from "../useClasses";

const Footer = () => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Divider style={{ backgroundColor: theme.palette.primary.main }} />
      <Box className={classes.footer}>
        {isMobile && <Social mobile />}
        <Typography variant="body2">© 2023 Calvin Hsu</Typography>
      </Box>
    </Container>
  );
};

const styles = (theme) => ({
  footer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
});

export default Footer;

import React from "react";
import { useTheme, Grid, Typography, Box, useMediaQuery } from "@mui/material";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";
import { useTranslation } from "react-i18next";
import useClasses from "../../components/useClasses";

const About = () => {
  const classes = useClasses(styles);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  return (
    <SectionContainer id="about" title={t("menu_about")} maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          className={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={4}>
            <Typography variant="body1">{t("about_desc")}</Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} mt={4} className={classes.gridItemWrapper}>
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

const styles = (theme) => ({
  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default About;

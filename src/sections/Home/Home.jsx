import React, { useContext, useEffect } from "react";
import { Typography, Button, useTheme } from "@mui/material";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import VideoLogo from "../../components/VideoLogo";
import { useTranslation } from "react-i18next";
import loaderContext from "../../contexts/loaderContext";
import useClasses from "../../components/useClasses";

const Home = () => {
  const theme = useTheme();
  // const classes = useClasses(styles(theme));
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 750], ["0%", "250%"]);
  let opacity = useTransform(scrollY, [0, 300], [1, 0]);
  let opacityFaster = useTransform(scrollY, [0, 110], [1, 0]);
  let scale = useTransform(scrollY, [0, 750], ["100%", "70%"]);

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 5 });
    }
  }, [isLoading, controls]);

  return (
    <HomeContainer id="home">
      <div>
        <Typography
          component={motion.div}
          animate={controls}
          custom={0}
          color="primary"
          variant="h5"
          style={{ marginBottom: "0px" }}
        >
          {t("home_welcome")}
          <motion.div
            style={{ display: "inline-block" }}
            animate={{ rotate: [50, 90, 50] }}
            transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
          >
            👋
          </motion.div>
          , {t("home_i")}
        </Typography>
        <motion.div animate={controls} custom={1}>
          <VideoLogo />
        </motion.div>
        <Typography
          component={motion.p}
          animate={controls}
          custom={2}
          variant="h2"
          color="secondary"
          sx={{
            marginBottom: "16px",
            fontSize: { lg: "75px", sm: "45px", xs: "35px" },
          }}
        >
          {t("home_what_i_do")}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={3}
          variant="body2"
          style={{ marginBottom: "0" }}
        >
          {t("home_job")}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={4}
          variant="body1"
          style={{ marginBottom: "30px" }}
        >
          {t("home_location")}
        </Typography>
        <motion.div animate={controls} custom={5}>
          <Link to="contact" spy smooth>
            <Button
              offset={0}
              duration={500}
              variant="outlined"
              color="secondary"
              size="large"
            >
              {t("home_contact_btn")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </HomeContainer>
  );
};

export default Home;

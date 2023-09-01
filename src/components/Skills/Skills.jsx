import React from "react";
import { useTheme, Stack } from "@mui/material";
import { skillsList } from "../../data";
import useClasses from "../useClasses";
import { IconContext } from "react-icons";
import {
  SiCsharp,
  SiDotnet,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGoogle,
  SiReact,
  SiJquery,
  SiBootstrap,
  SiMui,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDjango,
  SiPostman,
  SiAmazons3,
  SiJsonwebtokens,
  SiAxios,
  SiSocketdotio,
} from "react-icons/si";
import { DiMaterializecss, DiJava } from "react-icons/di";
import { TbBrandGoogleBigQuery } from "react-icons/tb";

const Skills = () => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  return (
    <div className={classes.container}>
      <Stack
        direction="row"
        spacing={4}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <IconContext.Provider
          value={{
            size: "50",
            color: "white",
            style: { filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" },
          }}
        >
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiPython />
          <SiDjango />
          <SiPostgresql />
          <SiCsharp />
          <SiDotnet />
          <SiMicrosoftsqlserver />
          <SiGoogle />
          <TbBrandGoogleBigQuery />
          <SiJavascript />
          <SiJquery />
          <SiHtml5 />
          <SiCss3 />
          <DiJava />
          <SiBootstrap />
          <DiMaterializecss />
          <SiMui />
          <SiPostman />
          <SiAmazons3 />
          <SiJsonwebtokens />
          <SiAxios />
          <SiSocketdotio />
        </IconContext.Provider>
      </Stack>
    </div>
  );
};

const styles = (theme) => ({
  container: {
    maxWidth: "600px",
    display: "flex",
    flexWrap: "wrap",
  },
  skillWrapper: {
    width: "100%",
  },
  skillTitle: {
    whiteSpace: "nowrap",
    marginRight: theme.spacing(1),
  },
  paper: {
    marginRight: "10px",
    marginBottom: "10px",
    minWidth: "50px",
    padding: "10px",
  },
});

export default Skills;

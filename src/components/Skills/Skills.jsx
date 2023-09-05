import React, { useState } from "react";
import { useTheme, Stack, IconButton } from "@mui/material";
import { skillsList } from "../../data";
import useClasses from "../useClasses";
import { IconContext } from "react-icons";
import SnackbarOnHover from "./SnackbarOnHover";
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
  SiGooglemaps,
} from "react-icons/si";
import { DiMaterializecss, DiJava } from "react-icons/di";
import { TbBrandGoogleBigQuery } from "react-icons/tb";

const iconMappings = {
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
  SiReact: SiReact,
  SiNodedotjs: SiNodedotjs,
  SiPython: SiPython,
  SiDjango: SiDjango,
  SiPostgresql: SiPostgresql,
  SiCsharp: SiCsharp,
  SiDotnet: SiDotnet,
  SiMicrosoftsqlserver: SiMicrosoftsqlserver,
  SiGoogle: SiGoogle,
  TbBrandGoogleBigQuery: TbBrandGoogleBigQuery,
  SiJavascript: SiJavascript,
  SiJquery: SiJquery,
  SiHtml5: SiHtml5,
  SiCss3: SiCss3,
  DiJava: DiJava,
  SiBootstrap: SiBootstrap,
  DiMaterializecss: DiMaterializecss,
  SiMui: SiMui,
  SiPostman: SiPostman,
  SiAmazons3: SiAmazons3,
  SiJsonwebtokens: SiJsonwebtokens,
  SiAxios: SiAxios,
  SiSocketdotio: SiSocketdotio,
  SiGooglemaps: SiGooglemaps,
};

const Skills = () => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));

  const [iconStates, setIconStates] = useState(
    new Array(skillsList.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setIconStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = true;
      return updatedStates;
    });
  };

  const handleMouseLeave = (index) => {
    setIconStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = false;
      return updatedStates;
    });
  };

  const handleIconClick = (index) => {
    setIconStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div className={classes.container}>
      <Stack
        direction="row"
        spacing={2}
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
          {skillsList.map((skill, i) => {
            const IconComponent = iconMappings[skill.icon];
            return IconComponent ? (
              <div
                key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                onClick={() => handleIconClick(i)}
              >
                <IconButton
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <IconComponent />
                </IconButton>
                {iconStates[i] && (
                  <SnackbarOnHover
                    snackbarContent={skill.title}
                    iconStates={iconStates[i]}
                  />
                )}
              </div>
            ) : null;
          })}
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

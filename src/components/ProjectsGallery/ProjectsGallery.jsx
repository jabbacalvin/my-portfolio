import React, { useState } from "react";
import { projectList } from "../../data";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Divider,
  IconButton,
  Tooltip,
  Fade,
} from "@mui/material";
import { useTranslation } from "react-i18next";
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
  SiGooglemaps,
  SiYoutube,
  SiTwitch,
  SiGithub,
} from "react-icons/si";
import { DiMaterializecss, DiJava } from "react-icons/di";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { FaStripe, FaLink } from "react-icons/fa6";

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
  SiYoutube: SiYoutube,
  SiTwitch: SiTwitch,
  FaStripe: FaStripe,
};

const Project = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid item xs={12} md={6} key={project.id} align="center">
      <Card
        sx={{
          maxWidth: 580,
          cursor: project.gifImage !== "" ? "pointer" : "",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          sx={{
            height: { sx: 1.0, xs: 200, md: 270, lg: 330 },
            objectFit: "cover",
          }}
          image={
            !isHovered
              ? project.staticImage
              : project.gifImage !== ""
              ? project.gifImage
              : project.staticImage
          }
          title={project.title}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "0px",
            }}
            variant="overline"
          >
            {project.github ? (
              <IconContext.Provider
                value={{
                  size: "20",
                  color: "white",
                  style: {
                    filter: "drop-shadow(3px 5px 2px rgb(255 255 255 / 0.4))",
                  },
                }}
              >
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 1800 }}
                  disableFocusListener
                  title="GitHub"
                >
                  <IconButton
                    href={project.github && project.github}
                    target="_blank"
                  >
                    <SiGithub />
                  </IconButton>
                </Tooltip>
              </IconContext.Provider>
            ) : (
              ""
            )}
            <IconContext.Provider
              value={{
                size: "20",
                color: "white",
                style: {
                  filter: "drop-shadow(3px 5px 2px rgb(255 255 255 / 0.4))",
                },
              }}
            >
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 1800 }}
                disableFocusListener
                title="Demo"
              >
                <IconButton
                  href={project.liveSite && project.liveSite}
                  target="_blank"
                >
                  <FaLink />
                </IconButton>
              </Tooltip>
            </IconContext.Provider>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {project.title}
          </Typography>
          <Typography variant="subtitle2">{project.subtitle}</Typography>
          <Divider />
          <Typography variant="caption">{project.description}</Typography>
          <Divider />
          <Typography variant="caption">
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
                  size: "25",
                  color: "white",
                  style: {
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
                  },
                }}
              >
                {project.technologies.map((tech, i) => {
                  const IconComponent = iconMappings[tech.icon && tech.icon];
                  return IconComponent ? (
                    <div key={i}>
                      <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 1800 }}
                        disableFocusListener
                        title={tech.title && tech.title}
                      >
                        <IconButton
                          disableRipple
                          sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        >
                          <IconComponent />
                        </IconButton>
                      </Tooltip>
                    </div>
                  ) : null;
                })}
              </IconContext.Provider>
            </Stack>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const ProjectsGallery = () => {
  return (
    <Grid container spacing={2} justify="center">
      {projectList.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectsGallery;

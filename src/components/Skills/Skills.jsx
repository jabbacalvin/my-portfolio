import React from "react";
import { Typography, Box, useTheme, Paper } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { skillsList } from "../../data";
import useClasses from "../useClasses";

function LinearProgressWithLabel({ title, value }) {
  const classes = useClasses(styles);
  return (
    <div className={classes.skillWrapper}>
      <Typography
        variant="body2"
        display="inline"
        component="span"
        className={classes.skillTitle}
      >
        {title}
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Box width="100%" mr={1}>
          <ProgressBar value={value} />
        </Box>
      </Box>
    </div>
  );
}

const Skills = () => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  return (
    <div className={classes.container}>
      {skillsList.map((elem, k) => (
        <Paper elevation={10} key={k} className={classes.paper}>
          <Typography align="center">{elem.title}</Typography>
        </Paper>
      ))}
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

import React, { useState, useEffect } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SnackbarOnHover = ({ snackbarContent, hoverState }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    setShowSnackbar(hoverState);
  }, [hoverState]);

  const handleMouseEnter = () => {
    setShowSnackbar(true);
  };

  const handleMouseLeave = () => {
    setShowSnackbar(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <SnackbarContent
          message={`${snackbarContent}`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setShowSnackbar(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
    </div>
  );
};

export default SnackbarOnHover;

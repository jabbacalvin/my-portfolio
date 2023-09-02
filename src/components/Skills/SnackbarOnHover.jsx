import React, { useState, useEffect } from "react";
import {
  useTheme,
  useMediaQuery,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SnackbarOnHover = ({ snackbarContent, hoverState }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [anchorOrigin, setAnchorOrigin] = useState({
    vertical: "bottom",
    horizontal: isMobile ? "center" : "right", // Center on mobile, right on desktop
  });

  useEffect(() => {
    if (!isMobile) {
      setShowSnackbar(hoverState);
    }
  }, [hoverState, isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowSnackbar(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowSnackbar(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setShowSnackbar(!showSnackbar);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault(); // Prevent the click event after touch
    if (isMobile) {
      setShowSnackbar((prevShowSnackbar) => !prevShowSnackbar);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={showSnackbar && (hoverState || isMobile)}
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

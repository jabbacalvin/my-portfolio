import React, { useState } from "react";
import {
  Drawer,
  List,
  Button,
  Divider,
  ListItem,
  ListItemButton,
  Link as MuiLink,
  useTheme,
} from "@mui/material";
import { Link } from "react-scroll";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { useTranslation } from "react-i18next";
import useClasses from "../useClasses";

const MobileMenu = ({ open, onClose, onOpen }) => {
  const theme = useTheme();
  const classes = useClasses(styles(theme));
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { backgroundColor: theme.palette.background.default } }}
    >
      <div width="250" role="presentation">
        <List
          component="nav"
          sx={{ width: "auto", marginTop: theme.spacing(4) }}
        >
          {[
            { label: t("menu_about"), to: "about" },
            // { label: t("menu_experience"), to: "experience" },
            { label: t("menu_projects"), to: "projects" },
            { label: t("menu_contact"), to: "contact" },
            // Add other menu items here
          ].map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <ListItemButton
                selected={index === selectedIndex}
                onClick={() => handleListItemClick(index)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: theme.spacing(2, 0),
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover": {
                    backgroundColor: "rgb(80,80,80)",
                  },
                }}
              >
                {item.label}
              </ListItemButton>
            </Link>
          ))}
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: theme.spacing(1),
            }}
          >
            <Button
              component={MuiLink}
              target="_blank"
              href="/resume.pdf"
              variant="outlined"
              color="primary"
              underline="none"
            >
              {t("menu_resume")}
            </Button>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: theme.spacing(1),
            }}
          >
            <DarkModeSwitcher onClose={onClose} />
          </ListItem>
          <Divider />
        </List>
      </div>
    </Drawer>
  );
};

const styles = (theme) => ({
  active: {
    backgroundColor: theme.palette.primary.main,
  },
});

export default MobileMenu;

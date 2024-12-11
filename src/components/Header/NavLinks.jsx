import { Button, Switch, IconButton, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sun Icon
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Moon Icon

const navLinkStyle = {
  mr: 2,
  textDecoration: "none",
  fontWeight: (theme) => (theme.palette.mode === "light" ? "normal" : "bold"),
  "&.active": {
    fontWeight: "bold",
    textDecoration: "underline",
    color: (theme) => theme.palette.secondary.main,
  },
};

const NavLinks = ({ onClick, themeMode, handleThemeToggle }) => {
  return (
    <>
      <Button
        color="inherit"
        component={NavLink}
        to="/"
        onClick={onClick}
        sx={navLinkStyle}
      >
        Home
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to="/nutrients"
        onClick={onClick}
        sx={navLinkStyle}
      >
        Calory calculator
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to="/exercises"
        onClick={onClick}
        sx={navLinkStyle}
      >
        Exercises
      </Button>
      <Button
        color="inherit"
        component={NavLink}
        to="/calculators"
        onClick={onClick}
        sx={navLinkStyle}
      >
        Calculators
      </Button>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={handleThemeToggle}
          sx={{ color: themeMode === "light" ? "yellow" : "grey" }}
        >
          {themeMode === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>
        <Switch
          checked={themeMode === "dark"}
          onChange={handleThemeToggle}
          color="default"
        />
      </Box>
    </>
  );
};

export default NavLinks;

// Header.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ top: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Fitness Trackr
          </Typography>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <NavLinks />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => toggleDrawer(false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          <ListItem>
            <NavLinks onClick={() => toggleDrawer(false)} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const navLinkStyle = {
  mr: 2,
  textDecoration: "none",
  fontWeight: (theme) => (theme.palette.mode === "light" ? "normal" : "bold"),
  "&.active": {
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

const NavLinks = ({ onClick }) => (
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
      Nutrients
    </Button>
    <Button
      color="inherit"
      component={NavLink}
      to="/contact"
      onClick={onClick}
      sx={navLinkStyle}
    >
      Contact
    </Button>
  </>
);

export default NavLinks;

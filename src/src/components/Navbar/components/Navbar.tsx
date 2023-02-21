import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
// COMPONENTS
import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display={"flex"} alignItems="center">
          <NavLogo width="10rem" />
        </Box>
        <Box>
          <NavMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

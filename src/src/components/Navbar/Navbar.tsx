import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
// COMPONENTS
import { NavLogo } from "./components/NavLogo";
import { NavMenu } from "./components/NavMenu";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#272727" }}>
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
        <Box display={"flex"} gap="2rem">
          <NavMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

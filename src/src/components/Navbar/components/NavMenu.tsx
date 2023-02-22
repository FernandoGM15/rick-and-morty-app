import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavOptionsI, NAV_OPTIONS } from "../helpers/constants";
import { ResponsiveMenu } from "./ResponsiveMenu";

export const NavMenu = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
      >
        <ResponsiveMenu />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: "2rem",
        }}
      >
        {NAV_OPTIONS.map((item: NavOptionsI) => {
          return (
            <Typography
              sx={{ textDecoration: "none" }}
              color="primary"
              component={Link}
              to={item.path}
              key={item.id}
            >
              {item.name}
            </Typography>
          );
        })}
      </Box>
    </>
  );
};

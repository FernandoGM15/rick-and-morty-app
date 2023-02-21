import { Box, Button } from "@mui/material";
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
            <Button color="primary" key={item.id}>
              {item.name}
            </Button>
          );
        })}
      </Box>
    </>
  );
};

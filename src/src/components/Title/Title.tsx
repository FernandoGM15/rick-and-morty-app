import { Typography } from "@mui/material";
import { TitleI } from "../../interfaces/TitleI";

export const Title = ({ children }: TitleI) => {
  return (
    <Typography color="primary" variant="h3" sx={{marginBottom: "2.5rem"}}>
      {children}
    </Typography>
  );
};

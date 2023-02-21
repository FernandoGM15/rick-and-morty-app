import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CharacterI } from "../../../interfaces/CharacterI";

export const CharacterCard = ({ name, image }: Partial<CharacterI>) => {
  return (
    <Card sx={{ backgroundColor: "#272727" }}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          width={"100%"}
          image={image}
          alt={`${name} Image`}
        />
        <CardContent>
          <Typography
            textAlign={"center"}
            variant="h5"
            component={"div"}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

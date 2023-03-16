import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CharacterI } from '../../hooks/useCharacterList';

const CharacterCard = ({ name, image, handleShowDetails }: Partial<CharacterI>) => {
  return (
    <CardActionArea onClick={handleShowDetails}>
      <Card
        sx={{
          height: '24rem'
        }}
      >
        <CardMedia
          component={'img'}
          width={'100%'}
          image={image}
          alt={`${name} Image`}
        />
        <CardContent>
          <Typography
            textAlign={'center'}
            variant="h5"
            component={'div'}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default CharacterCard;

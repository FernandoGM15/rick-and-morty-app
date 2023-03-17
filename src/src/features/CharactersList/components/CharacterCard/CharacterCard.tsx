import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CharacterI } from '../../hooks/useCharacterList';

const CharacterCard = ({ name, image, handleShowDetails }: Partial<CharacterI>) => {
  return (
    <CardActionArea onClick={handleShowDetails}>
      <Card>
        <CardMedia
          component={'img'}
          width={'100%'}
          image={image}
          alt={`${name} Image`}
        />
        <CardContent
          sx={{
            height: '4rem',
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
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

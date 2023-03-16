import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CharacterI } from '../../../interfaces/CharacterI';

const CharacterCard = ({ id, name, image }: Partial<CharacterI>) => {
  const navigate = useNavigate();

  /**
   * Navigates to character details route
   */
  const handleClickOpen = () => {
    navigate(`/characters/${id}`);
  };

  return (
    <CardActionArea onClick={handleClickOpen}>
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

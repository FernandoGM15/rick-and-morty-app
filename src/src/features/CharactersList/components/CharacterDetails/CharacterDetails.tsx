import { Box, List, ListItem, Typography } from '@mui/material';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import useCharacterDetails from './hooks/useCharacterDetails';

const { loading, error, character } = useCharacterDetails();

const CharacterDetails = () => {
  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <Typography
        variant="h1"
        color="primary"
        textAlign="center"
      >
        {error}
      </Typography>
    );

  return (
    <>
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5rem',
          margin: '0 3rem'
        }}
      >
        <Box
          sx={{
            width: '40%'
          }}
        >
          <img
            width="100%"
            src={character.image}
            alt={character.name}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <List>
            <ListItem>
              <Typography variant="h5">Name: {character.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5">Species: {character.species}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5">Gender: {character.gender}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5">Status: {character.status}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5">Location: {character.location.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5">Origin: {character.origin.name}</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default CharacterDetails;

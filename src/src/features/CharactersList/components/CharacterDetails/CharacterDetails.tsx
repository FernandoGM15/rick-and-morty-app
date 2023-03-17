import { Grid, List, ListItem, Typography } from '@mui/material';
import ErrorPage from '../../../../components/ErrorPage/ErrorPage';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import useCharacterDetails from './hooks/useCharacterDetails';

const CharacterDetails = () => {
  const { loading, error, character } = useCharacterDetails();

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <Grid
        container
        height="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="5rem"
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <img
            style={{
              borderRadius: '10px'
            }}
            width="100%"
            src={character.image}
            alt={character.name}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
        >
          <List>
            <ListItem>
              <Typography variant="h5"><b>Name:</b> {character.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5"><b>Species:</b> {character.species}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5"><b>Gender:</b> {character.gender}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5"><b>Status:</b> {character.status}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5"><b>Location:</b> {character.location.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5"><b>Origin:</b> {character.origin.name}</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterDetails;

import { Box, List, ListItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { CharacterI } from '../../hooks/useCharacterList';
import { getCharacter } from '../../services/CharacterService';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<CharacterI>({
    id: 0,
    name: '',
    species: '',
    gender: '',
    created: '',
    episode: [],
    image: '',
    location: { link: '', name: '' },
    origin: { link: '', name: '' },
    status: '',
    type: '',
    url: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  /**
   * @description Get the character by Id obtained from params
   */
  useEffect(() => {
    (async () => {
      setLoading(true);
      if (!id) return;
      try {
        const character = await getCharacter(id);
        setCharacter(character);
      } catch (error) {
        const result = error as Error;
        setError(result.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
      {loading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </>
  );
};

export default CharacterDetails;

import { Box, Pagination, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';
import { useCharacterList } from './hooks/useCharacterList';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const CharactersList = () => {
  /**
   * @description Get the info provided by the custom hook
   */
  const { characters, info, page, changePagination, loading, error, navigate } = useCharacterList();

  /**
   * @description Executes the function of the custom hook when in the Pagination change event
   * @param {ChangeEvent<unknown>} event
   * @param {number} selectedPage
   */
  const handleChange = (event: ChangeEvent<unknown>, selectedPage: number) => {
    changePagination({ page: selectedPage });
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <Box>
        <Typography
          color="primary"
          variant="h3"
          sx={{ marginBottom: '2.5rem' }}
        >
          Characters
        </Typography>
        <Box
          display={'grid'}
          gridTemplateColumns={'repeat(auto-fit, minmax(250px, 1fr))'}
          gap={'2rem'}
          margin={'0 1rem'}
        >
          {characters.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
                handleShowDetails={() => navigate(`/characters/${character.id}`)}
              />
            );
          })}
        </Box>
        <Pagination
          count={info?.pages}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default CharactersList;

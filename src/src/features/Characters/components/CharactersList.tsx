import { Box, Pagination, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import {
  CharacterI,
  CharacterResponseI,
  InfoI,
} from "../../../interfaces/CharacterI";
import { CharacterCard } from "./CharacterCard";
import { getCharacters } from "../services/CharacterService";

export const Characters = () => {
  const [characters, setCharacters] = useState<CharacterI[]>([]);
  const [info, setInfo] = useState<InfoI>();
  const [page, setPage] = useState<number>(1);

  /**
   * @description Function that loads the API data
   */
  useEffect(() => {
    getCharacters().then((res) => setCharacters(res.results));
  }, []);

  /**
   * @description Function that changes the pagination info
   * @param event Default event of pagination component 
   * @param value The number of page selected
   */
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    getCharacters(value).then(({ results, info }: CharacterResponseI) => {
      setCharacters(results);
      setInfo(info);
      setPage(value);
    });
  };

  return (
    <Box>
      <Typography color="primary" variant="h3" sx={{ marginBottom: "2.5rem" }}>
        Characters
      </Typography>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(5, 1fr)"}
        gap={"2rem"}
        margin={"0 1rem"}
      >
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}
      </Box>
      <Pagination count={info?.pages} page={page} onChange={handleChange} />
    </Box>
  );
};

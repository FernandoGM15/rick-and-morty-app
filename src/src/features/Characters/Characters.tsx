import { Box, Pagination } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import {
  CharacterI,
  CharacterResponseI,
  InfoI,
} from "../../interfaces/CharacterI";
import { CharacterCard } from "./components/CharacterCard";
import { getCharacters } from "./services/CharacterService";

export const Characters = () => {
  const [characters, setCharacters] = useState<CharacterI[]>([]);
  const [info, setInfo] = useState<InfoI>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getCharacters().then((res) => setCharacters(res.results));
  }, []);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    getCharacters(page).then(({ results, info }: CharacterResponseI) => {
      setCharacters(results);
      setInfo(info);
    });
  };

  return (
    <Box>
      <Title>Characters</Title>
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

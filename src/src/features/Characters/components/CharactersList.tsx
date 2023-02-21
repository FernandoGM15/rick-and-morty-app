import { Box, Pagination, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import {
  CharacterI,
  CharacterResponseI,
  InfoI,
} from "../../../interfaces/CharacterI";
import { CharacterCard } from "./CharacterCard";
import { useCharacterList } from "../../../hooks/useCharacterList";

export const Characters = () => {
  /**
   * @description Get the info provided by the custom hook
   */
  const { characters, info, page, changePagination } = useCharacterList();

  /**
   * @description Executes the function of the custom hook when in the Pagination change event
   * @param {ChangeEvent<unknown>} event
   * @param {number} selectedPage
   */
  const handleChange = (event: ChangeEvent<unknown>, selectedPage: number) => {
    changePagination({ page: selectedPage });
  };

  return (
    <Box>
      <Typography color="primary" variant="h3" sx={{ marginBottom: "2.5rem" }}>
        Characters
      </Typography>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
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

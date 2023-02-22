import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterI } from "../../../interfaces/CharacterI";
import { getCharacter } from "../services/CharacterService";

export const CharacterDetails = () => {
  const [character, setCharacter] = useState<CharacterI | null>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getCharacter(id).then((character) => setCharacter(character));
  }, []);
  return <Typography variant="h1">{character?.name}</Typography>;
};

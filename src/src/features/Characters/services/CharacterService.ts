import { ENDPOINT } from "../../../enviroment/Endpoint"
import { CharacterI, CharacterResponseI } from "../../../interfaces/CharacterI"

export const getCharacters = async (page: number = 1): Promise<CharacterResponseI> => {
    const req = await fetch(`${ENDPOINT}/character?page=${page}`);
    const { results, info }: CharacterResponseI = await req.json();
    return { results, info };
}
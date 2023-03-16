import { ENDPOINT } from "../../../enviroment/Endpoint"
import { CharacterI, CharacterResponseI } from "../hooks/useCharacterList";

export const getCharacters = async (page: number = 1): Promise<CharacterResponseI> => {
    const req = await fetch(`${ENDPOINT}/character?page=${page}`);
    const { results, info }: CharacterResponseI = await req.json();
    return { results, info };
}


export const getCharacter = async (id: string): Promise<CharacterI> => {
    const req = await fetch(`${ENDPOINT}/character/${id}`);
    const resp: CharacterI = await req.json();
    return resp;
}
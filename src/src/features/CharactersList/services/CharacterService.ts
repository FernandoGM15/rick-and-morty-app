import { ENDPOINT } from "../../../enviroment/Endpoint"
import { CharacterI, CharacterResponseI } from "../hooks/useCharacterList";

interface ICharacterError {
    error: string;
}

export const getCharacters = async (page: number = 1): Promise<CharacterResponseI> => {
    const req = await fetch(`${ENDPOINT}/character?page=${page}`);
    if (req.ok) {
        const { results, info }: CharacterResponseI = await req.json();
        return { results, info };
    }
    const { error }: ICharacterError = await req.json();
    throw new Error(error);
}


export const getCharacter = async (id: string): Promise<CharacterI> => {
    const req = await fetch(`${ENDPOINT}/character/${id}`);
    if (req.ok) {
        const resp: CharacterI = await req.json();
        return resp;
    }
    const { error }: ICharacterError = await req.json();
    throw new Error(error);
}
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterI } from "../../../hooks/useCharacterList";
import { getCharacter } from "../../../services/CharacterService";

const useCharacterDetails = () => {
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
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    /**
     * @description Get the character by Id obtained from params
     */
    useEffect(() => {
        if (!id) return;
        (async () => {
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

    return { character, loading, error }
}

export default useCharacterDetails;
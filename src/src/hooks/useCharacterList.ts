import { ChangeEvent, useEffect, useState } from "react";
import { getCharacters } from "../features/Characters/services/CharacterService";
import { CharacterI, CharacterResponseI, InfoI } from "../interfaces/CharacterI";

export const useCharacterList = () => {
    const [characters, setCharacters] = useState<CharacterI[]>([]);
    const [info, setInfo] = useState<InfoI>();
    const [page, setPage] = useState<number>();

    /**
    * @description Function that loads the API data
    */
    useEffect(() => {
        changePagination()
    }, []);


    /**
   * @description Function that changes the pagination info
   * @param event Default event of pagination component
   * @param value The number of page selected
   */
    const changePagination = (value: number = 1) => {
        getCharacters(value).then(({ results, info }: CharacterResponseI) => {
            setCharacters(results);
            setInfo(info);
            setPage(value);
        });
    };

    return { characters, info, page, changePagination }


}
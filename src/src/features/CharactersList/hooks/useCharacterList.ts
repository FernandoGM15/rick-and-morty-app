import { useEffect, useState } from "react";
import { getCharacters } from "../services/CharacterService";

export interface CharacterI {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        link: string;
    };
    location: {
        name: string;
        link: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface InfoI {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface CharacterResponseI {
    info: InfoI,
    results: CharacterI[];
}

interface ChangePaginationPropsI {
    page: number;
}

export const useCharacterList = () => {
    const [characters, setCharacters] = useState<CharacterI[]>([]);
    const [info, setInfo] = useState<InfoI | null>();
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false)

    /**
    * @description Function that loads the API data
    */
    useEffect(() => {
        changePagination({ page })
    }, []);


    /**
   * @description Function that changes the pagination info
   * @param event Default event of pagination component
   * @param value The number of page selected
   */
    const changePagination = ({ page }: ChangePaginationPropsI) => {
        setLoading(true);
        getCharacters(page).then(({ results, info }: CharacterResponseI) => {
            setCharacters(results);
            setInfo(info);
            setPage(page);
            setLoading(false);
        });
    };

    return { characters, info, page, changePagination, loading }


}
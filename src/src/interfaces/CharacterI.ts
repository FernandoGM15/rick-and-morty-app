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
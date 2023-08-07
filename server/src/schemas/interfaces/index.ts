type ArtistsType = (string)[] | string;

interface ArtistsInterface {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    age: number;
    label: string;
    bio: string;
}

interface RecordLabelInterface {
    name: string;
    location: string;
    directorsName: string | string[];
}

interface SongsInterface {
    name: string;
    artists: ArtistsType;
    genre: string;
    duration: string;
    label: string;
    file_path: string;
    art_path: string;
}

interface GenreInterface {
    genre: string;
}

interface AlbumInterface {
    name: string;
    artists: ArtistsType;
    genre: string;
    duration: string;
    songs: SongsInterface[];
    file_path: string;
    art_path: string;
}

interface PlaylistInterface { 
    name: string;
    duration: string;
    description: string;
    songs: SongsInterface[] | SongsInterface;
    file_path: string;
    art_path: string;
}

export {ArtistsInterface,SongsInterface,GenreInterface,AlbumInterface,PlaylistInterface, RecordLabelInterface}
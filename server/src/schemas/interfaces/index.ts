type ArtistsType = (string | number)[] | string | number;

interface ArtistsInterface {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    age: number;
    label: string;
    bio: string;
    createdAt: Date;
    modifiedAt: Date;
}

interface RecordLabelInterface {
    name: string;
    location: string;
    directorsName: string | string[];
    createdAt: Date;
    modifiedAt: Date;
}

interface SongsInterface {
    name: string;
    artists: ArtistsType;
    genre: string;
    duration: string;
    label: string;
    createdAt: Date;
    modifiedAt: Date;
}

interface GenreInterface {
    genre: string;
    createdAt: Date;
    modifiedAt: Date;
}

interface AlbumInterface {
    name: string;
    artists: ArtistsType;
    genre: string;
    duration: string;
    songs: SongsInterface[];
    createdAt: Date;
    modifiedAt: Date;
}

interface PlaylistInterface { 
    name: string;
    duration: string;
    description: string;
    songs: SongsInterface[] | SongsInterface;
    createdAt: Date;
    modifiedAt: Date;
}

export {ArtistsInterface,SongsInterface,GenreInterface,AlbumInterface,PlaylistInterface, RecordLabelInterface}
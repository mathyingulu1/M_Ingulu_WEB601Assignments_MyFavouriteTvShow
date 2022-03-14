export interface Tvshow {
    readonly id: number;
    genre?: string;
    title: string;
    director: string;
    imageURL: string;
    //body: string;
    tags?: string[];
}
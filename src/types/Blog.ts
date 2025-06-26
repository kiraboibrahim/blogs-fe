import type Author from "./Author"

export default interface Blog {
    id: number,
    name: string,
    tagline: string,
    publicationDate: string,
    rating: number,
    numComments: number,
    body: string,
    authors: Array<Author>
}

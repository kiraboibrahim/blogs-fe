import type Author from "./Author"

export default interface Blog {
    id: number,
    name: string,
    tagline: string,
    pulbicationDate: string,
    rating: number,
    numComments: number,
    authors: Array<Author>
}

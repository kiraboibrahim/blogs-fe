import type Blog from "../../../../types/Blog"

type BlogProps = { blog: Blog }

export default function BlogHeader({blog}: BlogProps) {
    return <div>
        <h2>{blog.name}:</h2>
        <h3>{blog.tagline}</h3>
        <div>
            <span>{blog.authors.map(author => author.name).join(", ")}</span>
            <span>{blog.pulbicationDate}</span>
            <span>{blog.rating}</span>
            <span>{blog.numComments}</span>
        </div>
    </div>
}
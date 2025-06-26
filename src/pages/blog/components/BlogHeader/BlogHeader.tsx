import type Blog from "../../../../types/Blog"
import { 
    MessageCircleMore,
    User,
    CalendarDays,
    Star
} from 'lucide-react';



import "./BlogHeader.css";

type BlogProps = { blog: Blog }

export default function BlogHeader({blog}: BlogProps) {
    return <div className="blog-header-container">
        <h2 className="blog-name">{blog.name}:</h2>
        <h3 className="blog-tagline">{blog.tagline}</h3>
        <div className="blog-details">
            <span className="blog-authors">
                <User className="blog-icon" />
                {blog.authors.map(author => author.name).join(", ")}
            </span>
            <span className="blog-publication-date">
                <CalendarDays className="blog-icon" />
                {blog.publicationDate}
            </span>
            <span className="blog-rating">
                <Star className="blog-icon" />
                {blog.rating} Rating
            </span>
            <span className="blog-num-comments">
                <MessageCircleMore className="blog-icon blog-comments-icon" />
                {blog.numComments} Comments
            </span>
        </div>
    </div>
}

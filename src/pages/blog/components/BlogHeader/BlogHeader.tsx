import type Blog from "../../../../types/Blog"
import { 
    MessageCircleMore,
    User,
    CalendarDays,
    Star
} from 'lucide-react';
import styles from "./BlogHeader.module.css";

type BlogProps = { blog: Blog }

export default function BlogHeader({blog}: BlogProps) {
    return <div className={styles.blogHeaderContainer}>
        <h2 className={styles.blogName}>{blog.name}:</h2>
        <h3 className={styles.blogTagline}>{blog.tagline}</h3>
        <div className={styles.blogDetails}>
            <span className={styles.blogAuthors}>
                <User className={styles.blogIcon} />
                {blog.authors.map(author => author.name).join(", ")}
            </span>
            <span className={styles.blogPublicationDate}>
                <CalendarDays className={styles.blogIcon} />
                {blog.publicationDate}
            </span>
            <span className={styles.blogRating}>
                <Star className={styles.blogIcon} />
                {blog.rating} Rating
            </span>
            <span className={styles.blogNumComments}>
                <MessageCircleMore className={styles.blogIcon} />
                {blog.numComments} Comments
            </span>
        </div>
    </div>
}

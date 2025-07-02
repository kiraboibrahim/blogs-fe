import type Blog from "../../../types/Blog";
import blogCoverImage from "../../../assets/blog-cover-img.jpg";
import { CalendarDays, MessageCircleMore, MoveRight, Star } from "lucide-react";
import styles from "./BlogCard.module.css";
import { Link } from "react-router";


interface BlogCardProps {
    blog: Blog;
}

// Helper to extract a summary (first 200 chars or first paragraph)
function getSummary(body: string, maxLength =200) {
    const firstParagraph = body.split('\n').find(p => p.trim().length > 0) || body;
    if (firstParagraph.length > maxLength) {
        return firstParagraph.slice(0, maxLength) + "...";
    }
    return firstParagraph;
}

export default function BlogCard({blog} : BlogCardProps) {
    return (
        <div className={styles.blogCard}>
            <div className={styles.blogCoverImageContainer}>
                <img className={styles.blogCoverImage} src={blogCoverImage} alt={blog.name} />
            </div>
            <div className={styles.blogDetails}>
                <h2 className={styles.blogName}>{blog.name}</h2>
                <p className={styles.blogSummary}>{getSummary(blog.body)}</p>
                <div className={styles.blogMeta}>
                    <span className={styles.blogPublicationDate} ><CalendarDays className={`${styles.blogIcon} ${styles.dateIcon}`}  />{new Date(blog.publicationDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}</span>
                    <span className={styles.blogRating} >
                    <Star className={`${styles.blogIcon} ${styles.ratingIcon}`} />
                    {blog.rating} Rating
                    </span>
                    <span className={styles.blogNumComments} >
                        <MessageCircleMore className={`${styles.blogIcon} ${styles.commentsIcon}`} />
                        {blog.numComments} Comments
                    </span>
                    <Link to={`/blogs/${blog.id}`}>
                        <button className={styles.blogReadMoreButton}>Read More <MoveRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

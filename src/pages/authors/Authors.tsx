import styles from "./Authors.module.css";

import { sampleBlog } from "../../data";
export default function Authors() {
    // Extract unique authors from all blogs
    const allAuthors = sampleBlog.flatMap(blog => blog.authors);
    const uniqueAuthors = Array.from(new Map(allAuthors.map(author => [author.email, author])).values());

    return (
        <div className={styles.authorsPage}>
            <h2>Authors</h2>
            <ul className={styles.authorsList}>
                {uniqueAuthors.map(author => (
                    <li key={author.id} className={styles.authorCard}>
                        <h3>{author.name}</h3>
                        <p>{author.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import blogCoverImage from "../../../../assets/blog-cover-img.jpg"
import styles from "./BlogCoverImage.module.css";


export default function BlogCoverImage() {
    return (
        <div className={styles.blogCoverImageContainer}>
            <img className={styles.blogCoverImage} src={blogCoverImage} alt="Blog Cover" />
        </div>
    );
}

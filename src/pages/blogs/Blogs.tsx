import type Blog from "../../types/Blog";
import BlogCard from "./components/BlogCard";

import styles from "./Blogs.module.css";

export default function Blogs({blogs}: {blogs: Blog[]}) {
    return (
        <div className={styles.blogs}>
        {
            blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
         ))}
        </div>
    );
}

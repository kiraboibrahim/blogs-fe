import type BlogType from "../../types/Blog";
import BlogCoverImage from "./components/BlogCoverImage/BlogCoverImage";
import BlogHeader from "./components/BlogHeader/BlogHeader";
import BlogBody from "./components/BlogBody/BlogBody";
import "./Blog.css";


type BlogProps = {blog: BlogType}

export default function Blog({blog}: BlogProps) {
    return (
        <div className="blog">
            <BlogHeader blog={blog} />
            <BlogCoverImage />
            <BlogBody body={blog.body} />
        </div>
    )
}
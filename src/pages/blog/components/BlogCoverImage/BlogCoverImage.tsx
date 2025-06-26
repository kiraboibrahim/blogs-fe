import blogCoverImage from "../../../../assets/blog-cover-img.jpg"
import "./BlogCoverImage.css";


export default function BlogCoverImage() {
    return (
        <div className="blog-cover-image-container">
            <img className="blog-cover-image" src={blogCoverImage} alt="Blog Cover" />
        </div>
    );
}

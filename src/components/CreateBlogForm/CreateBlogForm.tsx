import { useState } from "react";
import styles from "./CreateBlog.module.css";
import createBlog from "../../services/createBlog";
import { BeatLoader } from "react-spinners";

export default function CreateBlogForm() {
    const [blogName, setBlogName] = useState("");
    const [headline, setHeadline] = useState("");
    const [body, setBody] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [loading, setLoading] = useState(false);
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const blogData = {
            blogName,
            headline,
            body,
            publicationDate
        }
        setLoading(true);
        try {
            await createBlog(blogData);
        } catch(err) {

        } finally {
            setLoading(false);
        }
        console.log(blogData);
    }
    return <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.header}>
            <h2 className={styles.headerTitle}>Create Blog Entry</h2>
            <span className={styles.headerSubTitle}>Share your thoughts</span>
        </div>
        
        <div className={styles.formGgroup}>
            <label htmlFor="blog-name" className={styles.formGroupLabel}>Blog</label>
            <span>{blogName}</span>
            <input id="blog-name" className={styles.formGroupField} name="blog-name" type="text" placeholder="Blog name" value={blogName} onChange={(event) => setBlogName(event.target.value)} required/>
        </div>
        <div className={styles.formGgroup}>
            <label className={styles.formGroupLabel}>Headline</label>
            <input className={styles.formGroupField}name="headline" type="text" placeholder="Enter your compelling headline..." value={headline} onChange={(event) => setHeadline(event.target.value)}required/>
        </div>
        
        <div className={styles.formGgroup}>
            <label className={styles.formGroupLabel}> Body Text</label>
            <textarea className={`${styles.blogBodyText} ${styles.formGroupField}`}placeholder="Write you blog post content here..." value={body} onChange={(event) => setBody(event.target.value)} required></textarea>
        </div>
        <div className={styles.formGgroup}>
            <label className={styles.formGroupLabel}>Publication Date</label>
            <input type="date" required className={`${styles.dateInput} ${styles.formGroupField}`} value={publicationDate} onChange={(event) => setPublicationDate(event.target.value)} />
        </div>
        <button className={styles.submitBtn} type="submit" disabled={loading}>{loading ? <BeatLoader /> : "Create Blog Entry"}</button>
    </form>
}

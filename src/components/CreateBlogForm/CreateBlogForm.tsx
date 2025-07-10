import { useEffect, useState } from "react";
import styles from "./CreateBlog.module.css";
import createBlogEntry from "../../services/createBlog";
import { BeatLoader, ClipLoader } from "react-spinners";
import getAuthors from "../../services/getAuthors";
import getBlogs from "../../services/getBlogs";
import type Author from "../../types/Author";
import type CreateBlog from "../../types/CreateBlog";

interface Blog {
    id: number;
    name: string;
    tagline: string;
}

export default function CreateBlogForm() {
    const [headline, setHeadline] = useState("");
    const [body, setBody] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [authorsLoading, setAuthorsLoading] = useState(false);
    const [blogsLoading, setBlogsLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [authors, setAuthors] = useState<Author[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const blogEntryData = {
            blog: selectedBlog?.id || null,
            headline,
            body_text: body,
            publication_date: publicationDate,
            authors: selectedAuthors.map(author => author.id)
        }
        console.log(blogEntryData);
        setIsSubmitting(true);
        try {
            await createBlogEntry(blogEntryData);
        } catch(err) {

        } finally {
            setIsSubmitting(false);
        }
        console.log(blogEntryData);
    }

    useEffect(() => {
        const fetchData = async () => {
            setAuthorsLoading(true);
            setBlogsLoading(true);
            try {
                const authors = await getAuthors();
                const blogs = await getBlogs();
                setBlogs(blogs);
                setAuthors(authors);
            } catch (error) {
                console.error("Error fetching authors:", error);
            } finally {
                setAuthorsLoading(false);
                setBlogsLoading(false);
            }
        };

        fetchData();
    }, []);

    return <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.header}>
            <h2 className={styles.headerTitle}>Create Blog Entry</h2>
            <span className={styles.headerSubTitle}>Share your thoughts</span>
        </div>
        
        <div className={styles.formGgroup}>
            <label htmlFor="blog-name" className={styles.formGroupLabel}>Blog</label>
            <ClipLoader loading={blogsLoading} size={20} color="#000" />
            <select id="blog-name" className={styles.formGroupField} name="blog-name" value={selectedBlog?.id || ""} onChange={(event) => setSelectedBlog(blogs.find(b => b.id === Number(event.target.value)) || null)} required>
                <option value="">Select a blog</option>
                {
                    blogs.map((blog) => (
                        <option key={blog.id} value={blog.id}>{blog.name}</option>
                    ))
                }
            </select>
        </div>
        <div className={styles.formGgroup}>
            <label className={styles.formGroupLabel}>Authors</label>
            <ClipLoader loading={authorsLoading} size={20} color="#000" />
            <select className={styles.formGroupField} name="authors" multiple onChange={(event) => {
                const selectedOptionValues = Array.from(event.target.selectedOptions).map(option => option.value);
                setSelectedAuthors(authors.filter(author => selectedOptionValues.includes(String(author.id))));
            }} value={selectedAuthors.map(author => String(author.id))}>
                {
                    authors.map((author) => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))
                }
            </select>
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
        <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>{isSubmitting ? <BeatLoader /> : "Create Blog Entry"}</button>
    </form>
}

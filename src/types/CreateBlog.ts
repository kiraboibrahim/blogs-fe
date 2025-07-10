
export default interface CreateBlog {
    blog: number | null;
    headline: string;
    body_text: string;
    publication_date: string;
    authors: number[];
}

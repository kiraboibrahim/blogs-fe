import type CreateBlog from "../types/CreateBlog";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class ValidationError extends Error {}

class AuthenticationError extends Error {}

class InternalServerError extends Error {}

class UnknownError extends Error {}

async function sleep(duration_ms: number) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(null), duration_ms);
    })
}
export default async function createBlogEntry(blogData: CreateBlog) {
    
    const endpoint = `${API_BASE_URL}/blogs/${blogData.blog}/entries/`;
    delete blogData.blog;
    const response = await fetch(endpoint, {body: JSON.stringify(blogData), method: "post", headers: {
        'Content-Type': 'application/json'
    }});
    if(response.ok) {
        return await response.json();
    }
    const responseText = await response.text();
    if(response.status === 400) {
        throw new ValidationError(responseText);
    } else if(response.status === 403) {
        throw new AuthenticationError(responseText)
    } else if(response.status ===  500) {
        throw new InternalServerError(responseText);
    }
    throw new UnknownError(responseText);
}
export default async function getBlogs() {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const endpoint = `${API_BASE_URL}/blogs/`;
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return await response.json();
    }

    const responseText = await response.text();
    throw new Error(`Failed to fetch blogs: ${responseText}`);
}

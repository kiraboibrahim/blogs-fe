import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Authors from "./pages/authors/Authors";
import Profile from "./pages/authors/Profile";
import { Routes, Route, BrowserRouter } from "react-router";
import { sampleBlog } from "./data";
import MainLayout from "./layouts/MainLayout";
import CreateBlogForm from "./components/CreateBlogForm/CreateBlogForm";

const basename = import.meta.env.VITE_BASENAME || "/blogs-fe";

import { useParams } from "react-router";

function BlogWrapper() {
  const { blogId } = useParams();
  const blog = sampleBlog.find((b) => String(b.id) === blogId);
  return blog ? <Blog blog={blog} /> : <div>Blog not found</div>;
}
          <Route
            path="blogs/:blogId"
            element={
              <BlogWrapper />
            }
          />
function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs blogs={sampleBlog} />} />
          <Route path="blogs/:blogId" element={<BlogWrapper />} />
          <Route path="authors" element={<Authors />} />
          <Route path="authors/:authorId" element={<Profile />} />
        </Route>
        <Route path="create-blog" element={<CreateBlogForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
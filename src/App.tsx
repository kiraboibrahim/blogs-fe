import Blogs from "./pages/blogs/Blogs";
import Blog from "./pages/blog/Blog";
import { Routes, Route, BrowserRouter } from "react-router";
import { blogs, sampleBlog } from "./data";
import MainLayout from "./layouts/MainLayout";

const basename = import.meta.env.VITE_BASENAME || "/blogs-fe";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Blogs blogs={blogs} />} />
          <Route path="blogs" element={<Blogs blogs={blogs} />} />
          <Route
            path="blogs/:blogId"
            element={<Blog blog={sampleBlog} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

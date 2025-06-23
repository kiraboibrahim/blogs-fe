import BlogHeader from './pages/blog/components/BlogHeader/BlogHeader'
import type Blog from './types/Blog';
import type Author from './types/Author';

const jamieFox: Author = {
  id: 1,
  name: "Jamie Fox",
  email: "jamiefox@gmail.com"
}

const ibrahim: Author = {
  id: 2,
  name: "Ibrahim Ssabavuma",
  email: "ibrahimsabavuma@gmail.com"
}

const blog: Blog = {
  id: 1,
  name: "The Future of Remote Work",
  tagline: "Transforming Work Place Modern Culture",
  numComments: 64,
  rating: 3.9,
  pulbicationDate: "2025-03-04",
  authors: [jamieFox, ibrahim]
}

function App() {
  return (
    <>
      <BlogHeader blog={blog} />
    </>
  )
}

export default App

import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleBlog } from '../../data';

const Profile = () => {
  const { authorId } = useParams();
  const author = sampleBlog.authors.find((author) => author.id === authorId);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
      <h2>Blogs by {author.name}</h2>
      <ul>
        {author.blogs.map((blogId) => {
          const blog = sampleBlog.blogs.find((b) => b.id === blogId);
          return (
            <li key={blogId}>
              <a href={`/blogs/${blogId}`}>{blog.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
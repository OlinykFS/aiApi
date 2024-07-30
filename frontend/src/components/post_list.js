import React, { useState, useEffect } from "react";
import api from "../services/api";

const PostList = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchPosts = async (url = "/api/posts/") => {
    setLoading(true);
    try {
      const response = await api.get(url);
      setPosts(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNextPage = () => {
    if (nextPage) {
      fetchPosts(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetchPosts(prevPage);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`bg-blue-500 p-4 ${className}`}>
      <ul className="p-6">
        {posts.length ? (
          posts.map((post) => (
            <li className="p-10" key={post.id}>
              <h2 className="text-2xl">{post.title}</h2>
              <p>{post.content}</p>
              <p>{new Date(post.created_at).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
      <div className="fixed bottom-0">
        <button
          className="absolute"
          onClick={handlePrevPage}
          disabled={!prevPage}
        >
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
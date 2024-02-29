import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import ReactPaginate from "react-paginate";
import { Posts } from "../widgets";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage + postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;
    console.log(event.selected);
    setCurrentPage(newOffset);
    getPosts(event.selected + 1);
  };

  const getPosts = async (currentPage) => {
    try {
      setLoading(true);
      const postsData = await fetchPosts(currentPage, postsPerPage);
      const posts = postsData.data;

      setPosts([...posts]);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {posts.length > 0 && (
        <Posts
          onClick={handlePageClick}
          posts={currentPosts}
          postsPerPage={postsPerPage}
        />
      )}
      {error && <p>Something went wrong! Try later!</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PostsPage;

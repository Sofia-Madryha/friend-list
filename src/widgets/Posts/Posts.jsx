import ReactPaginate from "react-paginate";

const Posts = ({posts, onClick, postsPerPage }) => {
  return (
    <div className="posts__section section">
      <ul className="posts__list list">
        {posts.map((item) => (
          <li className="posts__item item" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onClick}
        pageRangeDisplayed={postsPerPage}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="pagination__item"
        activeClassName="pagination__item-active"
      />
    </div>
  );
};

export default Posts;

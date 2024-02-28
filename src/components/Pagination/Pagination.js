const Pagination = ({ friendsPerPage, totalFriends, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFriends / friendsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="pagination__item" key={number}>
            <a onClick={() => paginate(number)} href='#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

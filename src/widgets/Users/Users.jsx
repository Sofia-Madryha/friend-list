import ReactPaginate from "react-paginate";
import { UserInfo } from "../../components";
import { FavouriteContext } from "../../context/FavoritesContext";
import { useContext, useState } from "react";

const Users = ({ users }) => {
  const { addToFavorites, isFavorite } = useContext(FavouriteContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  const indexOfLastUser = currentPage + usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const pageCount = Math.ceil(users.length / usersPerPage);

  // Change page

  const handlePageClick = (event) => {
    const newOffset = (event.selected * usersPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setCurrentPage(newOffset);
  };

  return (
    <div className="users__section section">
      <ul className="users__list list">
        {currentUsers.map((item) => (
          <li className="users__item item" key={item.id}>
            <UserInfo userInfo={item} />

            {isFavorite(item.id) ? (
              <p>added to favorites</p>
            ) : (
              <button onClick={() => addToFavorites(item)}>
                add to favorites
              </button>
            )}
          </li>
        ))}
      </ul>

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={usersPerPage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="pagination__item"
        activeClassName="pagination__item-active"
      />
    </div>
  );
};

export default Users;

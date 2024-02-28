import { UserInfo } from "../../components";
import Pagination from "../../components/Pagination/Pagination";
import { FavouriteContext } from "../../context/FavoritesContext";
import { useContext, useState } from "react";

const Users = ({ users }) => {
  const { addToFavorites, isFavorite } = useContext(FavouriteContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage] = useState(4);

  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = users.slice(indexOfFirstFriend, indexOfLastFriend)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <ul>
        {currentFriends.map((item) => (
          <li key={item.id}>
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
      <Pagination
        friendsPerPage={friendsPerPage}
        totalFriends={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Users;

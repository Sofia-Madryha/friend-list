import { UserInfo } from "../../components";
import { FavouriteContext } from "../../context/FavoritesContext";
import { useContext } from "react";

const Users = ({ users }) => {
  const { addToFavorites, isFavorite } = useContext(FavouriteContext);

  return (
    <div>
      <ul>
        {users.map((item) => (
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
    </div>
  );
};

export default Users;

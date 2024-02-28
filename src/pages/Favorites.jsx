import { useContext } from "react";
import { FavouriteContext } from "../context/FavoritesContext";
import { UserInfo } from "../components";

const Favorites = () => {
  const { favorites, deleteFromFavorites } = useContext(FavouriteContext);

  return (
    <div>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>
            <UserInfo userInfo={item} />
            {/* <MdOutlineFavoriteBorder onClick={()=>addToFavorites(item)}/> */}
            <button onClick={() => deleteFromFavorites(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

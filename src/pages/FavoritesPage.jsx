import { useContext } from "react";
import { FavouriteContext } from "../context/FavoritesContext";
import { UserInfo } from "../components";

const FavoritesPage = () => {
  const { favorites, deleteFromFavorites } = useContext(FavouriteContext);

  return (
  
    <div>
      <ul>
        {favorites.length ? favorites.map((item) => (
          <li key={item.id}>
            <UserInfo userInfo={item} />
            {/* <MdOutlineFavoriteBorder onClick={()=>addToFavorites(item)}/> */}
            <button onClick={() => deleteFromFavorites(item.id)}>delete</button>
          </li>
        )): <p> You don't have favorites friends yet.</p>}
      </ul>
    </div>
  );
};

export default FavoritesPage;

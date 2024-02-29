import { Route, Routes } from "react-router-dom";
import FriendsPage from "./pages/FriendsPage";
import NotFoundPage from "./pages/NotFoudPage";
import { Layout} from "./widgets";
import FavoritesPage from "./pages/FavoritesPage";
import FavoriteProvider from "./context/FavoritesContext";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FriendsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </FavoriteProvider>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoudPage";
import { Layout } from "./widgets";
import Favorites from "./pages/Favorites";
import FavoriteProvider from "./context/FavoritesContext";

function App() {
  return (
    <div>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </FavoriteProvider>
    </div>
  );
}

export default App;

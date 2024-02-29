import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ()=>{
    return <header className="header__container">
<nav className="header__list">
      <Link to="/">Friends</Link>
      <Link to="/favorites"> Favorites<MdOutlineFavoriteBorder /></Link>
      <Link to="/posts"> Posts</Link>
     
    </nav>
    </header>
}

export default Header;
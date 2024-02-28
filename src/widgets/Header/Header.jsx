import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ()=>{
    return <header className="header__container">
<nav>
      <Link to="/">Home</Link>
      <Link to="/favorites"> <MdOutlineFavoriteBorder /></Link>
     
    </nav>
    </header>
}

export default Header;
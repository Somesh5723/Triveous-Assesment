import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <Link className={style.link}  to="/">News</Link>
        <Link className={style.link} to="/favoriate">Favorite Articles</Link>
        <Link className={style.link} to="/login">Login</Link>
        <Link className={style.link} to="/signup">Signup</Link>
      </div>
    </div>
  );
}
export default Navbar;

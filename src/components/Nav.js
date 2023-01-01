import { Link } from "react-router-dom";
import navList from "./data/NavList";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="navTitle">
          <Link to="/">MOVIE</Link>
        </div>
        <ul>
          {navList.map((nav) => (
            <li key={nav.title}>
              <Link to={`/list/${nav.path}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Nav;

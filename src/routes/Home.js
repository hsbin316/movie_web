import navList from "../components/data/NavList";
import Slide from "../components/Slide";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      {navList.map((nav, idx) => (
        <div key={idx}>
          <h3 className="title">
            <Link to={`list/${nav.path}`}>{nav.title} Movie</Link>
          </h3>
          <Slide
            ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=5&${nav.path}&sort_by=year`}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;

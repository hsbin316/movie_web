import navList from "../components/data/NavList";
import Slide from "../components/Slide";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        {navList.map((nav, idx) => (
          <div key={idx}>
            <h3>
              <Link to={`list/${nav.path}`}>{nav.title} Movie</Link>
            </h3>
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=3&${nav.path}&sort_by=year`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

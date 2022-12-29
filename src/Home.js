import navList from "./NavList";
import Slide from "./Slide";

function Home() {
  return (
    <div>
      <div>
        {navList.map((nav, idx) => (
          <div key={idx}>
            <h3>{nav.title} Movie</h3>
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${nav.path}&sort_by=year`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

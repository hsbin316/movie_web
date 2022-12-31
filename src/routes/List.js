import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function List() {
  const { list } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?&${list}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
      <div className="movieList">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <div className="movieSummary" key={movie.id}>
              <img
                className="movieImage"
                src={movie.medium_cover_image}
                alt={movie.title}
                title={movie.title}
              />
              <div>
                <h2 className="movieTitle">
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </h2>
                <span className="movieYear">{movie.year}</span>
                <hr />
                <div className="movieText">
                  <p>{movie.summary}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default List;

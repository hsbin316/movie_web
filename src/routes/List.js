import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        movies.map((movie) => (
          <div>
            <img
              src={movie.medium_cover_image}
              alt={movie.title}
              title={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default List;

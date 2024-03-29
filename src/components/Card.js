import { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "./Loading";

function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const json = await (await fetch(ytsApi)).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    getMovies();
  }, [ytsApi]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.medium_cover_image}
              title={movie.title}
              summary={""}
              genres={movie.genres}
              rating={movie.rating}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slide;

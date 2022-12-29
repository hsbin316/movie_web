import { useEffect, useState } from "react";
import Movie from "./Movie";

function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(ytsApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <div>
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
    </div>
  );
}

export default Slide;

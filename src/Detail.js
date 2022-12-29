import { useState, useEffect } from "react";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=8612`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          <img
            src={movie.medium_cover_image}
            alt={movie.tite}
            title={movie.title}
          />
          <div>{`${movie.title}(${movie.year})`}</div>
          <div>{movie.rating}</div>
          <div>{movie.runtime}</div>
          <ul>
            {movie.genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;

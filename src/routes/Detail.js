import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      <img
        className="backgeoundImage"
        src={movie.background_image_original}
        alt={movie.title}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="detailMovie">
          <img
            src={movie.medium_cover_image}
            alt={movie.tite}
            title={movie.title}
          />
          <div>
            <div className="detailTitle">{`${movie.title}(${movie.year})`}</div>
            <div className="detailText">{`Rating : ${movie.rating}`}</div>
            <div className="detailText">{`Runtime : ${movie.runtime}`}</div>
            <ul className="detailGenres">
              {movie.genres.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

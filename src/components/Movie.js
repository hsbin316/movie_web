import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//import img from "./asdf.jpg";
Movie.prototype = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Movie({ id, image, title, summary, genres, rating, year }) {
  return (
    <div className="movie">
      <img className="movieImg" src={image} alt={title} title={title} />
      <div>
        <h2 className="movieTitle">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span className="movieYear">{year}</span>
        <p>{summary}</p>
        <ul className="movieGenres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <div className="rating">Rating</div>
        <div className="movieProgress">
          <div
            className="movieRating"
            style={{ width: `${rating * 10}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Movie;

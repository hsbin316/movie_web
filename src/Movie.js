import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Movie.prototype = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Movie({ id, image, title, summary, genres, rating, year }) {
  return (
    <div>
      <img src={image} alt={title} title={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <span>{year}</span>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{rating}</p>
    </div>
  );
}
export default Movie;

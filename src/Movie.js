import PropTypes from "prop-types";

Movie.prototype = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Movie({ id, image, title, summary, genres, rating }) {
  return (
    <div>
      <img src={image} alt={title} title={title} />
      <div>{title}</div>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <div>{rating}</div>
    </div>
  );
}
export default Movie;

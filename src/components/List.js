import { Link } from "react-router-dom";
import PropTypes from "prop-types";

List.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

function List({ id, image, title, year, summary }) {
  return (
    <div className="movieSummary">
      <img className="movieImage" src={image} alt={title} title={title} />
      <div>
        <h2 className="movieTitle">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span className="movieYear">{year}</span>
        <hr />
        <div className="movieText">
          <p>{summary ? summary : "No data."}</p>
        </div>
      </div>
    </div>
  );
}

export default List;

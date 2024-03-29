import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import List from "../components/List";
import ScrollTop from "../components/ScrollTop";

function MoviesList() {
  const { list } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?&${list}&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    getMovies();
  }, [list]);
  return (
    <div className="container">
      <div className="movieList">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <List
              key={movie.id}
              id={movie.id}
              image={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
            />
          ))
        )}
        <ScrollTop />
      </div>
    </div>
  );
}
export default MoviesList;

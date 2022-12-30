import { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "../components/Loading";

function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([1, 2, 3]);
  const getMovies = async () => {
    // const json = await (await fetch(ytsApi)).json();
    // setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="movies">
          {movies.map((movie, idx) => (
            <Movie
              // key={movie.id}
              // id={movie.id}
              // image={movie.medium_cover_image}
              // title={movie.title}
              // summary={""}
              // genres={movie.genres}
              // rating={movie.rating}
              // year={movie.year}
              key={idx}
              id={"Asdf"}
              image={"./asdf.png"}
              title={"ASdfasdfasdfasdf"}
              summary={""}
              genres={["asdf", "asdfa"]}
              rating={8}
              year={2022}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slide;

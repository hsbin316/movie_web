import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

import img from "../components/asdf.jpg";

function List() {
  const { list } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const getMovies = async () => {
    // const json = await (
    //   await fetch(
    //     `https://yts.mx/api/v2/list_movies.json?&${list}&sort_by=year`
    //   )
    // ).json();
    // setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
      <div className="movieList">
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => (
            <div className="movieSummary" key={movie.id}>
              {/* <img
              src={movie.medium_cover_image}
              alt={movie.title}
              title={movie.title}
            />
            <h2>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h2>
            <p>{movie.summary}</p> */}
              <img
                className="movieImage"
                src={img}
                alt={"Asdf"}
                title={"Asdfas"}
              />
              <div>
                <h2 className="movieTitle">
                  <Link to={`/movie/${movie.id}`}>{"asasdfdf"}</Link>
                </h2>
                <span className="movieYear">{"2022"}</span>
                <div className="movieText">
                  <p>
                    {
                      "asdfasdfasdfasdfasdbfjkabdfkjbajksdfblkajsdbfjkabdfjkabsdfjkbakjsdfbakjsbdfkjabsdfjkbajksdfbjakbdsfajkdfbakjdsbkjafbjksdfbakjsdfbkajsbdfakjsdbfkajbdfkajdsbfakjldbfakjdsfbakjdsfbjkdssbfksjdffbj"
                    }
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default List;

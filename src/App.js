import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import MoviesList from "./routes/MoviesList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list/:list">
          <MoviesList />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

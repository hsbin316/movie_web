import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
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

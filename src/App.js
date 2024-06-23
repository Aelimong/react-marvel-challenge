import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Details from "./routes/Details/Detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/character/:id"}>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

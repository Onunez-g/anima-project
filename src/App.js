import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Anime from "./Pages/Anime/AnimePage";
import AnimeDetails from "./Pages/AnimeDetails/AnimeDetailsPage";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/anime" component={Anime} />
          <Route path="/anime/:id" component={AnimeDetails} />
          <Route path="/episodes" component={Home} />
          <Route path="/categories" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

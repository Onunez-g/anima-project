import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/anime" component={Home} />
          <Route path="/episodes" component={Home} />
          <Route path="/categories" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Project from "./pages/Project";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route component={About} path='/about' />
      <Route component={Post} path='/post' />
      <Route component={Project} path='/project' />
    </Switch>
    </BrowserRouter>
  )
}

export default App;

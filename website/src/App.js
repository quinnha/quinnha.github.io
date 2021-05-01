import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Missions from "./components/pages/missions";
import AstronautPage from "./components/pages/astronautpage";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/missions" component={Missions} />
          <Route path="/astronaut" component={AstronautPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

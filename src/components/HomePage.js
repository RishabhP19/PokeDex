import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";
import Pokemon from "./Pokemon";
function HomePage(props) {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className="homepage">
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <Pokemon setProgress={setProgress} key="water" />
          </Route>
          <Route exact path="/water">
            <Pokemon setProgress={setProgress} key="water" />
          </Route>
          <Route exact path="/rock">
            <Pokemon setProgress={setProgress} key="rock" />
          </Route>
          <Route exact path="/grass">
            <Pokemon setProgress={setProgress} key="grass" />
          </Route>
          <Route exact path="/ghost">
            <Pokemon setProgress={setProgress} key="ghost" />
          </Route>
          <Route exact path="/fire">
            <Pokemon setProgress={setProgress} key="fire" />
          </Route>
          <Route exact path="/electric">
            <Pokemon setProgress={setProgress} key="electric" />
          </Route>
          <Route exact path="/bug">
            <Pokemon setProgress={setProgress} key="bug" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;

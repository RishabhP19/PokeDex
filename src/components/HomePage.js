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
            <Pokemon setProgress={setProgress} type="grass" key="all" />
          </Route>
          <Route exact path="/water">
            <Pokemon setProgress={setProgress} type="grass" key="water" />
          </Route>
          <Route exact path="/rock">
            <Pokemon setProgress={setProgress} type="grass" key="rock" />
          </Route>
          <Route exact path="/grass">
            <Pokemon setProgress={setProgress} type="grass" key="grass" />
          </Route>
          <Route exact path="/ghost">
            <Pokemon setProgress={setProgress} type="grass" key="ghost" />
          </Route>
          <Route exact path="/fire">
            <Pokemon setProgress={setProgress} type="grass" key="fire" />
          </Route>
          <Route exact path="/electric">
            <Pokemon setProgress={setProgress} type="grass" key="electric" />
          </Route>
          <Route exact path="/bug">
            <Pokemon setProgress={setProgress} type="grass" key="bug" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;

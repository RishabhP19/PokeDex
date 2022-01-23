import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";
import { AiOutlineMenu } from "react-icons/ai";
import PokemonLogo from "./img/PokemonLogo.png";
import Pokemon from "./Pokemon";
function HomePage(props) {
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const toggleSidebar = () => {
    const Sidebar = document.querySelector(".sidebar");
    const MiniSidebar = document.querySelector(".mini_sidebar");
    if (Sidebar) {
      Sidebar.classList.toggle("active");
    }
    if (MiniSidebar) {
      MiniSidebar.classList.toggle("active");
    }
  };

  return (
    <Router>
      <div className="header">
        <div className="header_left">
          <div onClick={toggleSidebar}>
            <AiOutlineMenu className="head_menu" />
          </div>
          <img className="header_logo" src={PokemonLogo} alt="PokemonLogo" />
        </div>
        <div className="container">
          <form>
            <button type="submit">Search</button>
            <input
              type="search"
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
      <div className="homepage">
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/PokeDex">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="water"
            />
          </Route>
          <Route exact path="/water">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="water2"
            />
          </Route>
          <Route exact path="/rock">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="rock"
            />
          </Route>
          <Route exact path="/grass">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="grass"
            />
          </Route>
          <Route exact path="/ghost">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="ghost"
            />
          </Route>
          <Route exact path="/fire">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="fire"
            />
          </Route>
          <Route exact path="/electric">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="electric"
            />
          </Route>
          <Route exact path="/bug">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="bug"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;

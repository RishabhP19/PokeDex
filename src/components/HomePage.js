import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./main.css";
import { AiOutlineMenu } from "react-icons/ai";
import PokemonLogo from "./img/PokemonLogo.png";
import "./SideBarRow.css";
import "./Sidebar.css";
import Pokemon from "./Pokemon";
import All from "./img/All.png";
import Bug from "./img/Bug.png";
import Electric from "./img/Electric.png";
import Fire from "./img/Fire.png";

import Grass from "./img/Grass.png";
import Rock from "./img/Rock.png";
import Water from "./img/Water1.png";
import "./Header.css";
import "./Sidebar.css";
function HomePage(props) {
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  const handlefilterType = (element) => {
    setFilterType(element);
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
        <div className="parant_header">
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

          <div className="sidebar">
            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("")}
              to="/PokeDex"
            >
              <img src={All} alt="All Type" className="icon_img" />
              <h2 className="sidebarRow_title">All Type</h2>
            </Link>
            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("water")}
              to="/water"
            >
              <img src={Water} alt="Water Type" className="icon_img" />
              <h2 className="sidebarRow_title">Water Type</h2>
            </Link>

            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("grass")}
              to="/grass"
            >
              <img src={Grass} alt="Rock Type" className="icon_img" />
              <h2 className="sidebarRow_title">Grass Type</h2>
            </Link>

            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("fire")}
              to="/fire"
            >
              <img src={Fire} alt="Fire Type" className="icon_img" />
              <h2 className="sidebarRow_title">Fire Type</h2>
            </Link>
            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("electric")}
              to="/electric"
            >
              <img src={Electric} alt="Electric Type" className="icon_img" />
              <h2 className="sidebarRow_title">Electric Type</h2>
            </Link>
            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("bug")}
              to="/bug"
            >
              <img src={Bug} alt="Electric Type" className="icon_img" />
              <h2 className="sidebarRow_title">Bug Type</h2>
            </Link>
            <Link
              className="sidebar_row"
              onClick={() => handlefilterType("rock")}
              to="/rock"
            >
              <img src={Rock} alt="Rock Type" className="icon_img" />
              <h2 className="sidebarRow_title">Rock Type</h2>
            </Link>
          </div>
          <div className="mini_sidebar">
            <Link className="miniDiv">
              <img
                src={All}
                alt="Water"
                onClick={() => handlefilterType("")}
                className="icon_img"
              />
            </Link>
            <Link className="miniDiv">
              <img
                src={Water}
                alt="Water"
                onClick={() => handlefilterType("water")}
                className="icon_img"
              />
            </Link>

            <Link className="miniDiv">
              <img
                src={Grass}
                alt="Grass"
                onClick={() => handlefilterType("grass")}
                className="icon_img"
              />
            </Link>

            <Link className="miniDiv">
              <img
                src={Fire}
                alt="Fire"
                onClick={() => handlefilterType("fire")}
                className="icon_img"
              />
            </Link>
            <Link className="miniDiv">
              <img
                src={Electric}
                alt="Electric"
                onClick={() => handlefilterType("electric")}
                className="icon_img"
              />
            </Link>
            <Link className="miniDiv">
              <img
                src={Bug}
                alt="Bug"
                onClick={() => handlefilterType("bug")}
                className="icon_img"
              />
            </Link>
            <Link className="miniDiv">
              <img
                src={Rock}
                alt="Rock"
                onClick={() => handlefilterType("rock")}
                className="icon_img"
              />
            </Link>
          </div>
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
              filterType={filterType}
            />
          </Route>
          <Route exact path="/water">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="water2"
              filterType={filterType}
            />
          </Route>
          <Route exact path="/rock">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="rock"
              filterType={filterType}
            />
          </Route>
          <Route exact path="/grass">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="grass"
              filterType={filterType}
            />
          </Route>
          <Route exact path="/ghost">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="ghost"
              filterType={filterType}
            />
          </Route>
          <Route exact path="/fire">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="fire"
              filterType={filterType}
            />
          </Route>
          <Route exact path="/electric">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="electric"
              filterType={filterType}
            />
          </Route>
          <Route exact path="/bug">
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="bug"
              filterType={filterType}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;

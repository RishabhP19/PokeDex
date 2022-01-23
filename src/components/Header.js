import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import PokemonLogo from "./img/PokemonLogo.png";
import Bug from "./img/Bug.png";
import Electric from "./img/Electric.png";
import Fire from "./img/Fire.png";
import Ghost from "./img/Gost.png";
import Grass from "./img/Grass.png";
import Rock from "./img/Rock.png";
import Water from "./img/Water1.png";
import "./Header.css";
import "./Sidebar.css";
import SideBarRow from "./SideBarRow";

export function Header(props) {
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
      <div className="parant_header">
        <div className="header">
          <div className="header_left">
            <div onClick={toggleSidebar}>
              <AiOutlineMenu className="head_menu" />
            </div>
            <img className="header_logo" src={PokemonLogo} alt="PokemonLogo" />
          </div>
          <div className="container">
            <form>
              <button type="submit" onClick={(e) => ""}>
                Search
              </button>
              <input type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
        <div className="sidebar">
          <SideBarRow icon={Water} title="Water Type" to="/" />
          <SideBarRow icon={Rock} title="Rock Type" to="/rock" />
          <SideBarRow icon={Grass} title="Grass Type" to="/grass" />
          <SideBarRow icon={Ghost} title="Ghost Type" to="/ghost" />
          <SideBarRow icon={Fire} title="Fire Type" to="/fire" />
          <SideBarRow icon={Electric} title="Electric Type" to="/electric" />
          <SideBarRow icon={Bug} title="Bug Type" to="/bug" />
        </div>
        <div className="mini_sidebar">
          <Link className="miniDiv" to="/">
            <img src={Water} alt="Water" className="icon_img" />
          </Link>
          <Link className="miniDiv" to="/rock">
            <img src={Rock} alt="Rock" className="icon_img" />
          </Link>
          <Link className="miniDiv" to="/grass">
            <img src={Grass} alt="Grass" className="icon_img" />
          </Link>
          <Link className="miniDiv" to="/ghost">
            <img src={Ghost} alt="Ghost" className="icon_img" />
          </Link>
          <Link className="miniDiv" to="/fire">
            <img src={Fire} alt="Fire" className="icon_img" />
          </Link>
          <Link className="miniDiv" to="/electric">
            <img src={Electric} alt="Electric" className="icon_img" />
          </Link>
          <Link className="miniDiv" to="/bug">
            <img src={Bug} alt="Bug" className="icon_img" />
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default Header;

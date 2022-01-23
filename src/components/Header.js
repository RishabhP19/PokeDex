import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
  return (
    <Router>
      <div className="parant_header">
        <div className="sidebar">
          <SideBarRow icon={Water} title="Water Type" to="/PokeDex" />
          <SideBarRow icon={Rock} title="Rock Type" to="/rock" />
          <SideBarRow icon={Grass} title="Grass Type" to="/grass" />
          <SideBarRow icon={Ghost} title="Ghost Type" to="/ghost" />
          <SideBarRow icon={Fire} title="Fire Type" to="/fire" />
          <SideBarRow icon={Electric} title="Electric Type" to="/electric" />
          <SideBarRow icon={Bug} title="Bug Type" to="/bug" />
        </div>
        <div className="mini_sidebar">
          <Link className="miniDiv">
            <img src={Water} alt="Water" className="icon_img" />
          </Link>
          <Link className="miniDiv">
            <img src={Rock} alt="Rock" className="icon_img" />
          </Link>
          <Link className="miniDiv">
            <img src={Grass} alt="Grass" className="icon_img" />
          </Link>
          <Link className="miniDiv">
            <img src={Ghost} alt="Ghost" className="icon_img" />
          </Link>
          <Link className="miniDiv">
            <img src={Fire} alt="Fire" className="icon_img" />
          </Link>
          <Link className="miniDiv">
            <img src={Electric} alt="Electric" className="icon_img" />
          </Link>
          <Link className="miniDiv">
            <img src={Bug} alt="Bug" className="icon_img" />
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default Header;

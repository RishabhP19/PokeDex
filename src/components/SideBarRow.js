import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./SideBarRow.css";
import "./Sidebar.css";
export const SideBarRow = (props) => {
  return (
    <Router>
      <Link className="sidebar_row" to={props.to}>
        <img src={props.icon} alt="props.title" className="icon_img" />
        <h2 className="sidebarRow_title">{props.title}</h2>
      </Link>
    </Router>
  );
};

export default SideBarRow;

import React from "react";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="menu">
      <div className="Sidebar">
        <div className="sidebartitle">
          <br></br>Great Plan
        </div>
        <SidebarIcon />
        <ul className="SidebarList">
          {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname == value.link ? "active" : ""}
                className="row"
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

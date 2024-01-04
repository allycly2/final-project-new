import React from "react";
import Icon from "../images/icon.png";

function SidebarIcon() {
  return (
    <div className="SidebarIcon">
      <img src={Icon} />
      <p>greatdairy@gmail.com</p>
      <br></br>
      <p>
        login <span> logout</span>
      </p>
      <br></br>
    </div>
  );
}

export default SidebarIcon;

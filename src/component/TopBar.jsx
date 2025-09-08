import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Topbar.css";

function Topbar() {
  return (
    <header className="topbar">
      <div className="logo">ClassTime</div>
      <FaUserCircle className="profile-icon" />
    </header>
  );
}

export default Topbar;

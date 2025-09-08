import React from "react";
import { FaChalkboardTeacher, FaUser, FaBook, FaCalendarAlt } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { MdAnnouncement, MdMeetingRoom } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">ClassTime</h2>
      <nav>
        <Link to="/dashboard"><RiDashboardFill /> Dashboard</Link>
        <Link to="/rooms"><MdMeetingRoom /> Room</Link>
        <Link to="/teachers"><FaChalkboardTeacher /> Teacher</Link>
        <Link to="/students"><PiStudentBold /> Student</Link>
        <Link to="/courses"><FaBook /> Course</Link>
        <Link to="/schedule"><FaCalendarAlt /> Schedule</Link>
        <Link to="/announcements"><MdAnnouncement /> Announcements</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;

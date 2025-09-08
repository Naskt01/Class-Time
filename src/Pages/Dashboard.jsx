import React from "react";
import Sidebar from "../component/SideBar";
import Topbar from "../component/TopBar";
import StatCard from "../component/StatCard";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar />
        <main>
          <h1>Welcome, Admin</h1>

          <div className="stats">
            <StatCard title="Total Teachers" value="25" />
            <StatCard title="Total Classes" value="6" />
            <StatCard title="Rooms" value="15" />
            <StatCard title="Courses" value="6" />
          </div>

          <section className="quick-actions">
            <h2>Quick Actions</h2>
            <ul>
              <li><a href="/add-teacher">Add Teacher</a></li>
              <li><a href="/create-schedule">Create Schedule</a></li>
              <li><a href="/add-announcement">Add Announcement</a></li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

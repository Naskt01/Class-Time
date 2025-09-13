import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";
import StatCard from "../component/StatCard";

import "./Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // 🔹 Later replace with API call (fetch/axios)
    // Example: fetch("/api/dashboard-stats").then(res => res.json()).then(data => setStats(data));
    const fetchStats = async () => {
      // Simulated backend response
      const data = [
        { title: "Total Teachers", value: 25 },
        { title: "Total Classes", value: 6 },
        { title: "Rooms", value: 15 },
        { title: "Course", value: 6 },
      ];
      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <Layout>
        <div className="dashboard-welcome">
          <h1>Welcome, Admin!</h1>
        </div>
        {/* STATCARD SECTION  */}
        <div className="stats">
          {stats.map((s, i) => (
            <StatCard key={i} title={s.title} value={s.value} />
            ))}
        </div>
        {/* QUICKACTION SECTION */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <ul>
            <li><Link to="/teacher">Add Teacher</Link></li>
            <li><Link to="/schedule">Create Schedule</Link></li>
            <li><Link to="/announcements">Add Announcement</Link></li>
          </ul>
        </section>
    </Layout>
  );
}

export default Dashboard;

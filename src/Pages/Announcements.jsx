import React, { useState } from "react";
import Layout from "../component/Layout";

import "../styles.css";



function Announcements() {
  const [announcement, setAnnouncement] = useState([
    { id: 1, title: "Sports Day", date: "09-11-2025", description: "Annual Sports Day", status: "Published" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [formData, setFormData] = useState({ 
    title: "", 
    date: "", 
    description: "", 
    status: "" 
  });

const handleAddAnnouncement = (e) => {
    e.preventDefault();

    const announcementData = {
      id: editingAnnouncement ? editingAnnouncement.id : Date.now(),
      title: formData.title,
      date: formData.date,
      description: formData.description,
      status: "Published",
    };

    if (editingAnnouncement) {
      const updatedAnnouncement = announcement.map((r) =>
        r.id === editingAnnouncement.id ? announcementData : r
      );
      setAnnouncement(updatedAnnouncement);
    } else {
      setAnnouncement([...announcement, announcementData]);
    }

    setShowForm(false);
    setEditingAnnouncement(null);
    setFormData({ title: "", date: "", description: "", status: "" }); // reset form
  };
  // Delete Announcement
  const handleDelete = (id) => {
    const updatedAnnouncement = announcement.filter((announcement) => announcement.id !== id);
    setAnnouncement(updatedAnnouncement);
  };

  // Edit Announcement
  const handleEdit = (announcement) => {
    setEditingAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      date: announcement.date,
      description: announcement.description,
      status: announcement.status,
    });
    setShowForm(true);
  }
    // Open Add Announcement Modal
  const handleOpenAdd = () => {
    setEditingAnnouncement(null); // not editing
    setFormData({ title: "", date: "", description: "", status: ""}); // clear form
    setShowForm(true);
  };

  // Cancel Modal
  const handleCancel = () => {
    setShowForm(false);
    setEditingAnnouncement(null);
    setFormData({ title: "", date: "", description: "", status: ""}); // clear form
  };

  return (
    <Layout>
      <div className="page-header">
            <h1>Announcements</h1>
            <button className="btn" onClick={handleOpenAdd}>Add Announcement</button>
          </div>
          {/* Announcements Table */}
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {announcement.map((announcement) => (
                <tr key={announcement.id}>
                  <td>{announcement.title}</td>
                  <td>{announcement.date}</td>
                  <td>{announcement.description}</td>
                  <td>
                    <span className={`status-badge ${announcement.status === "Published" ? "published" : ""}`}>
                      {announcement.status}
                    </span> 
                  </td>                 
                  <td>
                    <button className="edit" onClick={() => handleEdit(announcement)}>Edit</button>{" "}
                    |{" "}
                    <button className="delete" onClick={() => handleDelete(announcement.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* Modal for Add Announcement */}
          {showForm && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>{editingAnnouncement ? "Edit Announcement" : "Add Announcement"}</h2>
                <form className= "modal-form" onSubmit={handleAddAnnouncement}>
                <label>Title*</label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Short Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                <label>Date*</label>
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                <label>Description*</label>
                  <textarea
                    name="description"
                    type= "text"
                    placeholder="Write a Description here!"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  ></textarea>
                <div className="modal-actions">
                  <button type="button" className="btn cancel" onClick={handleCancel}>Cancel</button> 
                  <button type="submit" className="btn">Publish</button>              
                </div>
              </form>
            </div>
          </div>
          )}
      </Layout>
    );
  }

export default Announcements;
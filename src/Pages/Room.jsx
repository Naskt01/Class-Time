import React, { useState } from "react";
import Layout from "../component/Layout";

import "../styles.css";

function Room() {
  const [rooms, setRooms] = useState([
    { id: 1, number: "2001", type: "Classroom", capacity: 30 }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [formData, setFormData] = useState({
    number: "",
    type: "",
    capacity: "",
  });

  const handleAddRoom = (e) => {
    e.preventDefault();

    const roomData = {
      id: editingRoom ? editingRoom.id : Date.now(),
      number: formData.number,
      type: formData.type,
      capacity: formData.capacity,
    };

    if (editingRoom) {
      const updatedRooms = rooms.map((r) =>
        r.id === editingRoom.id ? roomData : r
      );
      setRooms(updatedRooms);
    } else {
      setRooms([...rooms, roomData]);
    }

    setShowForm(false);
    setEditingRoom(null);
    setFormData({ number: "", type: "", capacity: "" }); // reset form
  };
  // Delete Room
  const handleDelete = (id) => {
    const updatedRooms = rooms.filter((room) => room.id !== id);
    setRooms(updatedRooms);
  };

  // Edit Room
  const handleEdit = (room) => {
    setEditingRoom(room);
    setFormData({
      number: room.number,
      type: room.type,
      capacity: room.capacity,
    });
    setShowForm(true);
  };
    // Open Add Room Modal
  const handleOpenAdd = () => {
    setEditingRoom(null); // not editing
    setFormData({ number: "", type: "", capacity: "" }); // clear form
    setShowForm(true);
  };

  // Cancel Modal
  const handleCancel = () => {
    setShowForm(false);
    setEditingRoom(null);
    setFormData({ number: "", type: "", capacity: "" }); // clear form
  };

  return (
  <Layout>
        <div className="page-header">
          <h1>Room Management</h1>
          <button className="btn" onClick={() => setShowForm(true)}>Add Room</button>
        </div>
        {/* Rooms Table */}
        <table className="data-table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Capacity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td>{room.number}</td>
                <td>{room.type}</td>
                <td>{room.capacity}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(room)}>Edit</button>{" "}
                |{" "}
                <button className="delete" onClick={() => handleDelete(room.id)}>Delete</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal for Add Room */}
        {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            {/* <h2>Add Room</h2> */}
            <h2>{editingRoom ? "Edit Room" : "Add Room"}</h2>
            <form className= "modal-form" onSubmit={handleAddRoom}>
              <label>Room Number*</label>
                <input
                  name="number"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  required
                />

              <label>Room Type*</label>
                <input
                  name="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  required
                />

              <label>Capacity*</label>
                <input
                  name="capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  required
                />
              <div className="modal-actions">
                <button type="button" className="btn cancel" onClick={handleCancel}>Cancel</button>                
                <button type="submit" className="btn" onClick={handleAddRoom}>Save</button>
              </div>
            </form>
          </div>
        </div>
        )}
      </Layout>
  );
}

export default Room;
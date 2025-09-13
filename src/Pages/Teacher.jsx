import React, { useState } from "react";
import Layout from "../component/Layout";

import "../styles.css";

function Teacher() {
  const [teacher, setTeacher] = useState([
    { teacherid: 1, fullname: "John Smith", subject: "Maths", email: "Smithj01@gmail.com", username:"Smithj", password: "123@" }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [formData, setFormData] = useState({
    teacherid: "",
    fullname: "",
    subject: "",
    email: "",
    username: "",
    password: "",
  });

  const handleAddTeacher = (e) => {
    e.preventDefault();

    const teacherData = {
      teacherid: editingTeacher ? editingTeacher.teacherid : Date.now(),
      fullname: formData.fullname,
      subject: formData.subject,
      email: formData.email,
      username: formData.username,
      password: formData.password,
    };

    if (editingTeacher) {
      const updatedTeacher = teacher.map((r) =>
        r.teacherid === editingTeacher.teacherid ? teacherData : r
      );
      setTeacher(updatedTeacher);
    } else {
      setTeacher([...teacher, teacherData]);
    }

    setShowForm(false);
    setEditingTeacher(null);
    setFormData({ teacherid: "", fullname: "", subject: "", email: "", username: "", password: "" }); // reset form
  };
  // Delete Teacher
  const handleDelete = (teacherid) => {
    const updatedTeacher = teacher.filter((teacher) => teacher.teacherid !== teacherid);
    setTeacher(updatedTeacher);
  };

  // Edit Teacher
  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setFormData({
      teacherid: teacher.teacherid,
      fullname: teacher.fullname,
      subject: teacher.subject,
      email: teacher.email,
      username: teacher.username,
      password: teacher.password,
    });
    setShowForm(true);
  };
    // Open Add Teacher Modal
  const handleOpenAdd = () => {
    setEditingTeacher(null); // not editing
    setFormData({ teacherid: "", fullname: "", subject: "", email: "", username: "", password:""}); // clear form
    setShowForm(true);
  };

  // Cancel Modal
  const handleCancel = () => {
    setShowForm(false);
    setEditingTeacher(null);
    setFormData({ teacherid: "", fullname: "", subject: "", email: "", username: "", password: ""}); // clear form
  };

  return (
  <Layout>
        <div className="page-header">
          <h1>Teacher Management</h1>
          <button className="btn" onClick={handleOpenAdd}>Add Teacher</button>
        </div>
        {/* Teacher's Table */}
        <table className="data-table">
          <thead>
            <tr>
              <th>TeacherID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((teacher) => (
              <tr key={teacher.teacherid}>
                <td>{teacher.teacherid}</td>
                <td>{teacher.fullname}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.email}</td>
                <td>{teacher.username}</td>
                <td>******</td>
              <td>
                <button className="edit" onClick={() => handleEdit(teacher)}>Edit</button>{" "}
                |{" "}
                <button className="delete" onClick={() => handleDelete(teacher.teacherid)}>Delete</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal for Add Teacher */}
        {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingTeacher ? "Edit Teacher" : "Add Teacher"}</h2>
            <form className= "modal-form" onSubmit={handleAddTeacher}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name*</label>
                  <input
                    name="fullname"
                    type= "text"
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject*</label>
                  <input
                    name="subject"
                    type= "text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email*</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Username*</label>
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>TeacherID*</label>
                  <input
                    name="teacherid"
                    type="number"
                    value={formData.teacherid}
                    onChange={(e) => setFormData({ ...formData, teacherid: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn cancel" onClick={handleCancel}>Cancel</button>                
                <button type="submit" className="btn" onClick={handleAddTeacher}>Save</button>
              </div>
            </form>
          </div>
        </div>
        )}
      </Layout>
  );
}


export default Teacher;
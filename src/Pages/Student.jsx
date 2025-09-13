import React, { useState } from "react";
import Layout from "../component/Layout";

import "../styles.css";

function Student() {
  const [student, setStudent] = useState([
    { studentid: "1001", fullname: "Seula Daily", email: "Dailys01@gmail.com", username: "DailyS", password: "123@", gender: "Female", status: "Active" }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    studentid: "",
    fullname: "",
    email: "",
    username: "",
    password: "",
    gender: "",
    status: "",
  });

  const handleAddStudent = (e) => {
    e.preventDefault();

    const studentData = {
      studentid: editingStudent ? editingStudent.studentid : Date.now(),
      fullname: formData.fullname,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      gender: formData.gender,
      status: formData.status,
    };

    if (editingStudent) {
      const updatedStudent = student.map((r) =>
        r.studentid === editingStudent.studentid ? studentData : r
      );
      setStudent(updatedStudent);
    } else {
      setStudent([...student, studentData]);
    }

    setShowForm(false);
    setEditingStudent(null);
    setFormData({ studentid:"", fullname: "", email: "", username: "", password: "",  gender: "", status: "" }); // reset form
  };
  // Delete Student
  const handleDelete = (studentid) => {
    const updatedStudent = student.filter((student) => student.studentid !== studentid);
    setStudent(updatedStudent);
  };

  // Edit Student
  const handleEdit = (student) => {
    setEditingStudent(student);
    setFormData({
      studentid: student.studentid,
      fullname: student.fullname,
      email: student.email,
      username: student.username,
      password: student.password,
      gender: student.gender,
      status: student.status,
    });
    setShowForm(true);
  };
    // Open Add Student Modal
  const handleOpenAdd = () => {
    setEditingStudent(null); // not editing
    setFormData({ studentid:"", fullname: "", email: "", username: "", password: "",  gender: "", status: "" }); // clear form
    setShowForm(true);
  };

  // Cancel Modal
  const handleCancel = () => {
    setShowForm(false);
    setEditingStudent(null);
    setFormData({ studentid:"", fullname: "", email: "", username: "", password: "",  gender: "", status: "" }); // clear form
  };

  return (
  <Layout>
        <div className="page-header">
          <h1>Student Management</h1>
          <button className="btn" onClick={handleOpenAdd}>Add Student</button>
        </div>
        {/* Student's's Table */}
        <table className="data-table">
          <thead>
            <tr>
              <th>StudentID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student) => (
              <tr key={student.studentid}>
                <td>{student.studentid}</td>
                <td>{student.fullname}</td>
                <td>{student.email}</td>
                <td>{student.username}</td>
                <td>*******</td>
                <td>{student.gender}</td>
                <td>{student.status}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(student)}>Edit</button>{" "}
                <button className="delete" onClick={() => handleDelete(student.studentid)}>Delete</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal for Add Student */}
        {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
            <form className= "modal-form" onSubmit={handleAddStudent}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Student Name*</label>
                  <input
                    name="fullname"
                    type="text"
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
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
                  <label>StudentID*</label>
                  <input
                    name="studentid"
                    type="number"
                    value={formData.studentid}
                    onChange={(e) => setFormData({ ...formData, studentid: e.target.value })}
                    required
                  />
                </div>
              </div>
              <label>Gender*</label>
              <div>
                <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}/> Male </label>
                <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}/> Female </label>
                <label><input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}/> Other </label>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label>Status*</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="Drop-out">Drop-out</option>
                  </select>
                </div>
              </div>
                <div className="modal-actions">
                  <button type="button" className="btn cancel" onClick={handleCancel}>Cancel</button>                
                  <button type="submit" className="btn" onClick={handleAddStudent}>Save</button>
                </div>
            </form>
          </div>
        </div>
        )}
      </Layout>
  );
}


export default Student;
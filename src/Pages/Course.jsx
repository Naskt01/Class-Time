import React, { useState } from "react";
import Layout from "../component/Layout";

import "../styles.css";

function Course() {
  const [course, setCourse] = useState([
    { courseid: 1, coursecode: "IS7000",coursename: "Capstone Project", credit: "3" }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    courseid: "",
    coursecode: "",
    coursename: "",
    credit: "",
  });

  const handleAddCourse = (e) => {
    e.preventDefault();

    const courseData = {
      courseid: editingCourse ? editingCourse.courseid : Date.now(),
      coursecode: formData.coursecode,
      coursename: formData.coursename,
      credit: formData.credit,
    };

    if (editingCourse) {
      const updatedCourse = course.map((r) =>
        r.courseid === editingCourse.courseid ? courseData : r
      );
      setCourse(updatedCourse);
    } else {
      setCourse([...Course, courseData]);
    }

    setShowForm(false);
    setEditingCourse(null);
    setFormData({  courseid: "", coursecode: "", coursename: "", credit: "" }); // reset form
  };
  // Delete Course
  const handleDelete = (courseid) => {
    const updatedCourse = course.filter((course) => course.courseid !== courseid);
    setCourse(updatedCourse);
  };

  // Edit Course
  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      courseid: course.courseid,
      coursecode: course.coursecode,
      coursename: course.coursename,
      credit: course.credit,
    });
    setShowForm(true);
  };
    // Open Add Course Modal
  const handleOpenAdd = () => {
    setEditingCourse(null); // not editing
    setFormData({ courseid: "", coursecode: "", coursename: "", credit: ""}); // clear form
    setShowForm(true);
  };

  // Cancel Modal
  const handleCancel = () => {
    setShowForm(false);
    setEditingCourse(null);
    setFormData({  courseid: "", coursecode: "", coursename: "", credit: ""}); // clear form
  };

  return (
  <Layout>
        <div className="page-header">
          <h1>Course Management</h1>
          <button className="btn" onClick={handleOpenAdd}>Add Course</button>
        </div>
        {/* Courses Table */}
        <table className="data-table">
          <thead>
            <tr>
              <th>CourseID</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Credit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {course.map((course) => (
              <tr key={course.id}>
                <td>{course.courseid}</td>
                <td>{course.coursecode}</td>
                <td>{course.coursename}</td>
                <td>{course.credit}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(course)}>Edit</button>{" "}
                |{" "}
                <button className="delete" onClick={() => handleDelete(course.id)}>Delete</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal for Add Course */}
        {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingCourse ? "Edit Course" : "Add Course"}</h2>
            <form className= "modal-form" onSubmit={handleAddCourse}>
              <label>Course ID</label>
                <input
                  name="courseid"
                  type= "text"
                  value={formData.courseid}
                  onChange={(e) => setFormData({ ...formData, courseid: e.target.value })}
                  required
                />
              <label>Course Code</label>
                <input
                  name="coursecode"
                  type= "text"
                  value={formData.coursecode}
                  onChange={(e) => setFormData({ ...formData, coursecode: e.target.value })}
                  required
                />

                <label>Course Name</label>
                <input
                  name="coursename"
                  type= "text"
                  value={formData.coursename}
                  onChange={(e) => setFormData({ ...formData, coursename: e.target.value })}
                  required
                />

                <label>Credit</label>
                <input
                  name="credit"
                  type="number"
                  value={formData.credit}
                  onChange={(e) => setFormData({ ...formData, credit: e.target.value })}
                  required
                />
              <div className="modal-actions">
                <button type="button" className="btn cancel" onClick={handleCancel}>Cancel</button>                
                <button type="submit" className="btn" onClick={handleOpenAdd}>Save</button>
              </div>
            </form>
          </div>
        </div>
        )}
      </Layout>
  );
}

export default Course;
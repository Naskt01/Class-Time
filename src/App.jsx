import React from "react";
import { Routes, Route } from "react-router-dom";
import UserSelection from '../src/Pages/UserSelection';
import Login from "../src/Pages/Login";
import Dashboard from "../src/Pages/Dashboard";
import Room from '../src/Pages/Room';
import Teacher from '../src/Pages/Teacher';
import Student from '../src/Pages/Student';
import Course from '../src/Pages/Course';
import Schedule from '../src/Pages/Schedule';
import Announcements from '../src/Pages/Announcements';


function App() {
  return (
    <Routes>
      <Route path="/" element={<UserSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/room" element={<Room />} /> 
      <Route path="/teacher" element={<Teacher />} /> 
      <Route path="/student" element={<Student />} />
      <Route path="/course" element={<Course />} />  
      <Route path="/schedule" element={<Schedule />} /> 
      <Route path="/announcements" element={<Announcements />} /> 
    </Routes>
  );
}

export default App;

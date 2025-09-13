import React from "react";
import { Routes, Route } from "react-router-dom";
import UserSelection from './Pages/UserSelection';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Room from './Pages/Room';
import Teacher from './Pages/Teacher';
import Student from './Pages/Student';
import Course from './Pages/Course';
import Schedule from './Pages/Schedule';
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

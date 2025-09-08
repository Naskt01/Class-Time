import React from "react";
import { Routes, Route } from "react-router-dom";
import UserSelection from '../src/Pages/UserSelection';
import Login from "../src/Pages/Login";
import Dashboard from "../src/Pages/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<UserSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;

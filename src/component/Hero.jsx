import React from "react";
import { RiAdminFill } from "react-icons/ri"; // Admin icon
import { FaChalkboardTeacher } from "react-icons/fa"; // Teacher icon
import { PiStudentBold } from "react-icons/pi"; // Student icon

import LOGO2 from "../assets/Logo2.png";


import "./Hero.css";

export default function Hero({ onRoleSelect = () => {} }) {
  const roles = [
    { key: 'admin', label: 'Admin', Icon: RiAdminFill },
    { key: 'teacher', label: 'Teacher', Icon: FaChalkboardTeacher },
    { key: 'student', label: 'Student', Icon: PiStudentBold },
  ]
  return (
    <section className="hero">
        <div className="hero-top" role="banner">
            <img src={LOGO2} alt="web logo" className="icon-calendar"/>
            <h1 className="brand">ClassTime</h1>
            <p className="tagline">Manage your academic schedule with efficiency and precision</p>
            <p className="iam">I am . . .</p>
        </div>
        <div className="role-grid" role="list">
            {roles.map(({ key, label, Icon }) => (
                <button
                key={key}
                className="role-card"
                onClick={() => onRoleSelect(key)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onRoleSelect(key) }}
                aria-label={`Select ${label}`}
                >
                <div className="role-circle">
                    <Icon className="icon role-icon" />
                    <span className="role-label">{label}</span>
                </div>
                </button>
                ))}
        </div>
    </section>
  )
}

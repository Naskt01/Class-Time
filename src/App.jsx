import React, { useState } from 'react'
import Hero from './component/Hero'

export default function App() {
  const [selectedRole, setSelectedRole] = useState(null)

  function handleRoleSelect(role) {
    setSelectedRole(role)
    // For now: debug. Later replace with navigation (React Router) or open the sign-up form.
    console.log('Selected role:', role)
    // Example: navigate to /signup?role=teacher when router is set up
    // navigate(`/signup?role=${role}`)
    alert(`Selected role: ${role}`)
  }

  return (
    <div>
      <Hero onRoleSelect={handleRoleSelect} />
      {/* Optionally show what was picked */}
      {selectedRole && <div style={{textAlign:'center', marginTop: '1rem'}}>You picked: <b>{selectedRole}</b></div>}
    </div>
  )
}

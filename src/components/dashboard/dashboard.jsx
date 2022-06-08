import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./dashboard.scss";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser,logout } = useAuth();
  const history = useNavigate()
  const handleClick = async () => {
    setError('')
    try{
        await logout()
        history('/login')
    }
    catch{
        setError('Failed to log out')
    }
  };
  return (
    <div className="wrappers">
      <div className="card">
        <div className="card-body">
          <h2>Profile</h2>
          {error && alert(error)}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/login">Update Profile</Link>
        </div>
      </div>
      <button type="button" className="btn" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}

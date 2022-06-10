import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import "./dashboard.scss";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  const handleClick = async () => {
    setError("");
    try {
      await logout();
      history("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  // motion
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
    exit: {
      x: "100%",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="wrappers"
    >
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
    </motion.div>
  );
}

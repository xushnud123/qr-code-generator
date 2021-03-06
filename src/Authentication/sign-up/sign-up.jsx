import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./sign-up.scss";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("password teng emas passwor-confirmga");
      return setError("password teng emas passwor-confirmga");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  //motion
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      y: "-100%",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="login-form"
    >
      <div className="row">
        <h1>Sign Up</h1>
        {error}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="box">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="box">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="box">
            <label htmlFor="password-confirm">password-confirm</label>
            <input
              type="password"
              id="password-confirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button disabled={loading} className="btn" type="submit">
            Sign Up
          </button>
        </form>
        <div className="links">
          <span>
            <Link to="/login">Log In? </Link>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;

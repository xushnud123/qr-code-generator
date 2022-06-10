import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../sign-up/sign-up.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      await login(email, password);
      history("/");
    } catch (e) {
      setError("Failed to create login");
    }
    setLoading(false);
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
      className="login-form"
    >
      <div className="row">
        <h1>Login</h1>
        <p>{error}</p>
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
          <button disabled={loading} className="btn" type="submit">
            Login
          </button>
        </form>
        <div className="links">
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;

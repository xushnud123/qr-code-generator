import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password)
      history('/group')
    } catch (e) {
      setError("Failed to create login");
    }
    setLoading(false);
  };


  return (
    <div className="login-form">
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
        <div>
          <p><Link to='/'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

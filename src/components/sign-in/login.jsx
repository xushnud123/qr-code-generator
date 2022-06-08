import React, { useState } from 'react'
import './login.scss'

const Login = () => {
   const [email,setEmail] = useState()
   const [password, setPassword] = useState();
    return (
      <div className="login-form">
        <div className="row">
          <h1>Login</h1>
          <form>
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
            <button className='btn' type='submit'>Log in</button>
          </form>
        </div>
      </div>
    );
}
 
export default Login;
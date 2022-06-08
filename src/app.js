import React, { useState } from "react";
import { BrowserRouter, Routes, Route,Navigate,Outlet } from "react-router-dom";
import Group from "./components/Group/group";
import QrCode from "./components/qr-code/qr-code";
import Login from "./components/sign-in/login";
import SignUp from "./components/sign-up/sign-up";
import Toolbar from "./components/Toolbar/toolbar";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./components/private-route/private-Route";
import { useAuth } from "./context/AuthContext";


const App = () => {
  const [open, setOpen] = useState(false)
  const { currentUser } = useAuth()

  return (
    <BrowserRouter>
      <div style={{ height: "100vh" }}>
          <Toolbar open={open} setOpen={setOpen} />
            <Routes> 
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<SignUp />} />
              {
                currentUser ?
                <Route path="/group" element={<Group open={open} />} />
                : <Route path="/login" element={<Login />} />
              }
            {
              currentUser ?
                <Route path="/create" element={<QrCode />} />
                : <Route path="/login" element={<Login />} />
            }
          {
            currentUser ?
              <Route path="/dashboard" element={<Dashboard />} />
              : <Route path="/login" element={<Login />} />
          }
              {/* <Route path="/" element={<PrivateRoute/>}/> */}
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

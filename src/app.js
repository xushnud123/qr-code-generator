import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Group from "./components/Group/group";
import QrCode from "./components/qr-code/qr-code";
import Login from "./Authentication/sign-in/login";
import SignUp from "./Authentication/sign-up/sign-up";
import Toolbar from "./components/Toolbar/toolbar";
import Dashboard from "./Authentication/dashboard/dashboard";
import PrivateRoute from "./components/private-route/private-route";
import { useAuth } from "./context/AuthContext";


const App = () => {
  const [open, setOpen] = useState(false)
  const { currentUser } = useAuth()

  return (
    <BrowserRouter>
      <div style={{ height: "100vh" }}>
        {currentUser && <Toolbar open={open} setOpen={setOpen} />}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Group open={open} />} />
            <Route path="/create" element={<QrCode />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

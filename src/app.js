import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "./context/AuthContext";
import Group from "./components/Group/group";
import QrCode from "./components/qr-code/qr-code";
import Login from "./Authentication/sign-in/login";
import SignUp from "./Authentication/sign-up/sign-up";
import Toolbar from "./components/Toolbar/toolbar";
import Dashboard from "./Authentication/dashboard/dashboard";
import PrivateRoute from "./components/private-route/private-route";


const App = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { currentUser, load } = useAuth()
  useEffect(() => {

  }, [load])

  return (
    <AnimatePresence>
      <div style={{ height: "100vh" }}>
          {<Toolbar open={open} setOpen={setOpen} />}
        <Routes location={location} key={location.pathname}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Group open={open} />} />
            <Route path="/create" element={<QrCode />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;

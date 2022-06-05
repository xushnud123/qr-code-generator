import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Group from "./components/Group/group";
import QrCode from "./components/qr-code/qr-code";
import Toolbar from "./components/Toolbar/toolbar";


const App = () =>{
  const [open, setOpen] = useState(false)

    return (
      <BrowserRouter>

      <div style={{ height: "100vh" }}>
        <Toolbar open={open} setOpen={setOpen}/>
          <Routes>
            <Route path="/" element={<Group open={open} />} />
            <Route path="/create" element={<QrCode />} />
          </Routes>
      </div>
      </BrowserRouter>
    );
}

export default App;
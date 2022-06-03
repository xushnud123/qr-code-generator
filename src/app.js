import React, { useState } from "react";
import Group from "./components/Group/group";
import QrCode from "./components/qr-code/qr-code";
import Toolbar from "./components/Toolbar/toolbar";


const App = () =>{
  const [open, setOpen] = useState(false)

    return (
      <div style={{ height: "100%" }}>
        <Toolbar open={open} setOpen={setOpen}/>
        {/* <Group open={open}/> */}
        <QrCode/>
      </div>
    );
}

export default App;

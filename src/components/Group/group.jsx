import React, { useState } from "react";
import Block from "../Block/block";
import Sidebar from "../sidebar/sidebar";
import "./group.scss";
const Group = ({ open }) => {
     const [todos, setTodos] = useState(() => {
       const localData = localStorage.getItem("todos");
       return localData ? JSON.parse(localData) : [];
     });

  return (
    <div className="wrappers">
      <div className={open ? "sidebar active" : "sidebar"}>
        <Sidebar item={todos} />
      </div>
      <div className={open ? "lists act" : "lists"}>
        {
          todos.map((item,index) => <Block item={item}key={index}/>
          )
        }
      </div>
    </div>
  );
};

export default Group;

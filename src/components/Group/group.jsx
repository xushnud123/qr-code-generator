import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Block from "../Block/block";
import Sidebar from "../sidebar/sidebar";
import "./group.scss";
const Group = ({ open }) => {
     const [todos, setTodos] = useState(() => {
       const localData = localStorage.getItem("todos");
       return localData ? JSON.parse(localData) : [];
     });

     const leng = todos.length

     useEffect(()=>{
       console.log(todos)
     },[todos])

  return (
    <div className="wrappers">
      <div className={open ? "sidebar active" : "sidebar"}>
        <Sidebar item={todos} />
      </div>
      <div className={open ? "lists act" : "lists"}>
        {leng ? (
          todos.map((item, index) => <Block item={item} key={index} />)
        ) : (
          <div className="box">
            <Link to="/create" className="btns">
              Create
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Group;

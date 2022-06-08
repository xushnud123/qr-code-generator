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
      const [value, setValue] = useState("");
      const filtered =
        value !== ""
          ? todos.filter((item) =>
              item.data.toLowerCase().includes(value.toLowerCase())
            )
          : todos;
     const leng = todos.length

    //  useEffect(()=>{
      //  console.log(todos)
//      },[todos])
console.log("filtered", filtered);
  return (
    <div className="wrappers">
      <div className={open ? "sidebar active" : "sidebar"}>
        <Sidebar filtered={filtered} value={value} setValue={setValue} />
      </div>
      <div className={open ? "lists act" : "lists"}>
        {leng ? (
          filtered.map((item, index) => <Block item={item} todos={todos} index={index} key={index} />)
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

import React from "react";
import Block from "../Block/block";
import Sidebar from "../sidebar/sidebar";
import "./group.scss";
const Group = ({ open }) => {
  console.log(open)
  return (
    <div className="wrappers">
      <div className={open ? "sidebar active" : "sidebar"}>
        <Sidebar/>
      </div>
      <div className={open ? "lists act" : "lists"}>
        <Block />
      </div>
    </div>
  );
};

export default Group;

import React, { useState } from "react";
import Block from "../Block/block";
import "./group.scss";
const Group = ({ open }) => {
  return (
    <div className="wrappers">
      <div className={open ? "sidebar active" : "sidebar"}></div>
      <div className={open ? "lists act" : "lists"}>
        <Block />
      </div>
    </div>
  );
};

export default Group;

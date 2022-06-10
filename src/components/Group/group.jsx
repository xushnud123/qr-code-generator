import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleDelete = (id) => {
    const itemIndex = todos.filter((i) => i.id !== id);
    setTodos(itemIndex);
    localStorage.setItem("todos", JSON.stringify(itemIndex));
  };

  const leng = todos.length;

  useEffect(() => {}, [todos]);

  //motion
  const containerVariants = {
    hidden: {
      opacity: 0,
      y:'-100%'
    },
    visible: {
      opacity: 1,
      y:'0',
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      y:'-100%',
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit='exit'
      className="wrappers"
    >
      <div className={open ? "sidebar active" : "sidebar"}>
        <Sidebar filtered={filtered} value={value} setValue={setValue} />
      </div>
      <motion.div layout className={open ? "lists act" : "lists"}>
        <AnimatePresence>
          {leng ? (
            filtered.map((item, index) => (
              <Block
                item={item}
                todos={todos}
                setTodos={setTodos}
                key={item.id}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div className="box">
              <Link to="/create" className="btns">
                Create
              </Link>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Group;

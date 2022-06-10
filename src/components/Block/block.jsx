import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import QrCoder from "../common/qr-coder/qr-coder";
import { HexColorPicker } from "react-colorful";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineFolderOpen } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";
import "./block.scss";

Modal.setAppElement("#root");

export default function Block({ item, todos,setTodos ,handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState(todos);
  const [val, setVal] = useState(item.data);
  const [colors, setColors] = useState({
    color: item.dotsOptions.color,
    bgcolor: item.backgroundOptions.color,
    colorCircle: item.cornersSquareOptions.color,
  });

  const [options, setOptions] = useState(item);

  useEffect(() => {
    setOptions({
      ...options,
      cornersSquareOptions: { color: colors.colorCircle },
      backgroundOptions: { color: colors.bgcolor },
      dotsOptions: { color: colors.color },
    });
  }, [colors]);

  const saveBtn = () => {
    const itemIndex = todo.filter((i) => i.id === item.id);
    let to = todo;
    to[itemIndex] = options;
    setTodo(to);
    localStorage.setItem("todos", JSON.stringify(to));
    setIsOpen(!isOpen);
  };

  // const handleDelete = (id) => {
  //   const itemIndex = todo.filter((i) => i.id !== id);
  //   setTodos(itemIndex)
  //   localStorage.setItem("todos", JSON.stringify(itemIndex));
  // };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="modalWrapper">
          <div className="colors">
            <div className="color">
              <h1>Color dots:</h1>
              <HexColorPicker
                color={colors.color}
                onChange={(e) => setColors({ ...colors, color: e })}
              />
            </div>
            <div className="color">
              <h1>Color Square:</h1>
              <HexColorPicker
                color={colors.colorCircle}
                onChange={(e) => setColors({ ...colors, colorCircle: e })}
              />
            </div>
            <div className="color">
              <h1>Color Square:</h1>
              <HexColorPicker
                color={colors.bgcolor}
                onChange={(e) => setColors({ ...colors, bgcolor: e })}
              />
            </div>
          </div>
          <div className="modal-qr">
            <QrCoder
              color={options.dotsOptions.color}
              colorCircle={options.cornersSquareOptions.color}
              bgColor={options.backgroundOptions.color}
              data={options.data}
            />
            <button className="save" onClick={() => saveBtn()}>
              save
            </button>
          </div>
        </div>
      </Modal>
      <div className="block-wrap">
        <div className="block-inner">
          <div className="block-left">
            {/* <div>
              <input type="checkbox" />
            </div> */}
            <div className="block-content">
              <p className="small-text">QrCode Name:</p>
              <div className="block-input">
                <CgWebsite className="website-icon" />
                {/* <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Name your QR Code..."
                /> */}
                <h1>{item.data}</h1>
              </div>
              <div className="block-content__inform">
                <div className="inform-left">
                  <p>
                    <span>
                      <MdOutlineFolderOpen />
                    </span>{" "}
                    No folder
                  </p>
                  <p>
                    <span>
                      <FiClock />
                    </span>
                    Jun 2, 2022
                  </p>
                </div>
                <div className="inform-right">
                  <p>
                    <span>
                      <BiLink />
                    </span>
                    qrco.de/bd4
                  </p>
                  <p>
                    <span>
                      <BsArrowReturnRight />
                    </span>
                    {item.data}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block-right">
            <div className="qr-scans">
              <h2>1</h2>
              <p>Scans</p>
              <div className="link">
                <a href="#" className="link">
                  Details --&gt;
                </a>
              </div>
            </div>
            <div className="qr-image">
              <QrCoder
                color={options.dotsOptions.color}
                colorCircle={options.cornersSquareOptions.color}
                bgColor={options.backgroundOptions.color}
                data={options.data}
              />
            </div>
            <div className="btn-wrap">
              <button className="download-btn">Download</button>
              <div className="actions">
                <span onClick={() => setIsOpen(!isOpen)}>
                  <VscSymbolColor />
                </span>
                <span onClick={() => handleDelete(item.id)}>
                  <AiOutlineDelete />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

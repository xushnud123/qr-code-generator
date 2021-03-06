import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HexColorPicker } from "react-colorful";
import { CgWebsite } from "react-icons/cg";
import "./qr-code.scss";

const QrCode = () => {
  const [colors, setColors] = useState({
    color: "#000000",
    bgcolor: "#5FD4F3",
    colorCircle: "#ffffff",
  });
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: "svg",
    data: "http://qr-code-styling.com",
    // image: "/favicon.ico",
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: colors.color,
      type: "rounded",
    },
    backgroundOptions: {
      color: colors.bgcolor,
    },
    cornersSquareOptions: {
      color: colors.colorCircle,
      type: "extra-rounded",
    },
    cornersDotOptions: {
      color: "#222222",
      type: "dot",
    },
  });
  const [fileExt, setFileExt] = useState("svg");
  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);

  useEffect(() => {
    setOptions({
      ...options,
      cornersSquareOptions: { color: colors.colorCircle },
      backgroundOptions: { color: colors.bgcolor },
      dotsOptions: { color: colors.color },
    });
  }, [colors]);


  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref, colors]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const onDataChange = (event) => {
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }));
  };


  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };

  const handleSave = () => {
    setTodos([...todos, options]);
    localStorage.setItem("todos", JSON.stringify([...todos, {...options,id: Math.random() * 1000 }]));
  };


    // motion
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      y: "100%",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="wrapper"
    >
      <div className="row">
        <div className="col">
          <div className="qr">
            <span>
              <CgWebsite />
            </span>
            <input
              type="
            name"
              className="qr-name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Name your QR Code"
            />
          </div>
          <div className="qr-input">
            <div className="input_wrap">
              <h1>Website:</h1>
              <input value={options.data} onChange={onDataChange} />
            </div>
            <div className="select_wrap">
              <h1>Type:</h1>
              <select onChange={onExtensionChange} value={fileExt}>
                <option value="svg">SVG</option>
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>
          </div>
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
        </div>
      </div>
      <div className="qr-img">
        <div ref={ref} className="qr" />
        <div className="btns">
          <button onClick={() => onDownloadClick()} className="btn">
            <p>Download</p>
          </button>
          <button onClick={() => handleSave()} className="btn">
            <Link to="/" className="save">
              <p>Save</p>
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QrCode;

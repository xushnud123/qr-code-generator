import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const QrCoder = ({
  color = "000000",
  colorCircle = "#222222",
  bgColor = "#5FD4F3",
  data = "http://qr-code-styling.com",
  
}) => {
  const [options, setOptions] = useState({
    width: 148,
    height: 148,
    type: "svg",
    data: data,
    image: "",
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
      color: color,
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
      // },
      type: "rounded",
    },
    backgroundOptions: {
      color: bgColor,
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
      // },
    },
    cornersSquareOptions: {
      color: colorCircle,
      type: "extra-rounded",
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
      // },
    },
    cornersDotOptions: {
      color: "#222222",
      type: "dot",
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
      // },
    },
  });

  const [fileExt, setFileExt] = useState("svg");
  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(()=>{
    setOptions({
      ...options,
      cornersSquareOptions: { color: colorCircle },
      backgroundOptions: { color: bgColor },
      dotsOptions: { color: color },
    });
  },[color,colorCircle,bgColor])

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode,options]);

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

  return <div ref={ref} className="qr" />;
};

export default QrCoder;

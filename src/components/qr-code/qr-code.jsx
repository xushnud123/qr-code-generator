import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { CgWebsite } from "react-icons/cg";
import "./qr-code.scss";

const QrCode = () => {

  const [value, setValue] = useState("");
  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: 'svg' ,
    data: 'http://qr-code-styling.com',
    image: '/favicon.ico',
    margin: 10,
    qrOptions: {
      typeNumber: 0 ,
      mode: 'Byte',
      errorCorrectionLevel: 'Q' 
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      color: '#222222',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
      // },
      type: 'rounded'
    },
    backgroundOptions: {
      color: '#5FD4F3',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 0,
      //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
      // },
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded',
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
      // },
    },
    cornersDotOptions: {
      color: '#222222',
      type: 'dot' ,
      // gradient: {
      //   type: 'linear', // 'radial'
      //   rotation: 180,
      //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
      // },
    }
  });
  const [fileExt, setFileExt] = useState("svg");
  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const onDataChange = (event) => {
    setOptions(options => ({
      ...options,
      data: event.target.value
    }));
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt
    });
  };

  return (
    <div className="wrapper">
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
                  <input value={options.data} onChange={onDataChange}  />
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
        </div>
      </div>
      <div className="qr-img">
        <div ref={ref} className="qr" />
        <button onClick={() => onDownloadClick()} className='btn'>Download</button>
      </div>
    </div>
  );
};

export default QrCode;

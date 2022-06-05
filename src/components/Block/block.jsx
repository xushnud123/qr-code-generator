import React,{useState} from "react";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineFolderOpen } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import "./block.scss";
import QrCoder from "../common/qr-coder/qr-coder";

export default function Block() {
   const [todos, setTodos] = useState(() => {
     const localData = localStorage.getItem("todos");
     return localData ? JSON.parse(localData) : [];
   });
  return (
    <React.Fragment>
      {
        todos.map(item => {
          return (
            <div className="block-wrap">
              <div className="block-inner">
                <div className="block-left">
                  {/* <div>
              <input type="checkbox" />
            </div> */}
                  <div className="block-content">
                    <p className="small-text">{item.data}</p>
                    <div className="block-input">
                      <CgWebsite className="website-icon" />
                      <input type="text" placeholder="Name your QR Code..." />
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
                          kun.uz
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
                      color={item.dotsOptions.color}
                      colorCircle={item.cornersSquareOptions.color}
                      bgColor={item.backgroundOptions.color}
                      data={item.data}
                    />
                  </div>
                  <div className="btn">
                    <button className="download-btn">Download</button>
                    <div className="actions"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </React.Fragment>
  
  );
}

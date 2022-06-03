import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineFolderOpen } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import "./block.scss";

export default function Block() {
  return (
    <div className="block-wrap">
      <div className="block-inner">
        <div className="block-left">
          <div>
            <input type="checkbox" />
          </div>
          <div className="block-content">
            <p className="small-text">Website</p>
            <div className="block-input">
              <CgWebsite className="website-icon" />
              <input type="text" placeholder="Name your QR Code..." />
            </div>
            <div className="block-content__inform">
              <div className="inform-left">
                <p>
                  <MdOutlineFolderOpen /> No folder
                </p>
                <p>
                  <FiClock /> Jun 2, 2022
                </p>
              </div>
              <div className="inform-right">
                <p>
                  <BiLink /> qrco.de/bd4
                </p>
                <p>
                  <BsArrowReturnRight /> kun.uz
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block-right">
          <div>
            <h2>1</h2>
            <p>Scans</p>

            <a href="#">Details -~</a>
          </div>
          <div className="qr-image">
            <img src="" alt="" />
          </div>
          <div>
            <button className="download-btn">Download</button>
            <div className="actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

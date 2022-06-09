import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FiFilePlus } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import imgDesktopLogo from '../../assets/img/qrcg-pro-logo.svg'
import imgMobilLogo from "../../assets/img/qrcg-pro-logo-short.svg";
import "./toolbar.scss";

const Toolbar = ({open,setOpen}) => {
    const { currentUser } = useAuth();
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="logo">
          <div className="toolbar__logo">
            <img src={imgDesktopLogo} alt="" />
            <img src={imgMobilLogo} alt="" />
          </div>
          <span></span>
          <div
            className="toolbar__toggle-button"
            onClick={() => setOpen(!open)}
          >
            {!open ? <GiHamburgerMenu /> : <IoMdClose />}
          </div>
        </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">
                <FiFilePlus />
              </Link>
            </li>
            <li>
              <Link to="/create">
                <AiOutlinePlusCircle />
              </Link>
            </li>
            <span></span>
            <li>
              <Link to="/dashboard">
                <BsPerson />
                <p>{ currentUser && currentUser.email}</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
 
export default Toolbar;

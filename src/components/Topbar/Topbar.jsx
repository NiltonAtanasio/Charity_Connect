import React from "react";
import "./Topbar.css";
import logo from "../../images/logo.png";
import Avatar from "../Avatar/Avatar";
import { IoMdNotifications, IoMdMenu } from "react-icons/io";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdPayments } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="top__bar">
      <div className="container__logo">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container__icon">
        <IoMdNotifications className="top__bar__icon" />

        <FaHome className="top__bar__icon" />

        <FaUserFriends className="top__bar__icon" />

        <Avatar />

        <AiFillMessage className="top__bar__icon" />

        <MdPayments className="top__bar__icon" />

        <IoMdMenu className="top__bar__icon" />
      </div>
      <div className="container__input">
        <input type="text" />
      </div>
    </div>
  );
}

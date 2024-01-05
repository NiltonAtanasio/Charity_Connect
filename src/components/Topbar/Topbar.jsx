import React from "react";
import "./Topbar.css";
import { NavLink } from "react-router-dom";
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
        <NavLink to={"/feed"}>
          <div>
            <img src={logo} alt="" />
          </div>
        </NavLink>
      </div>
      <div className="container__icon">
        <IoMdNotifications className="top__bar__icon" />

        <NavLink to={"/feed"}>
          <FaHome className="top__bar__icon" />
        </NavLink>

        <FaUserFriends className="top__bar__icon" />

        <NavLink to={"/perfil/1"}>
          <Avatar />
        </NavLink>

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

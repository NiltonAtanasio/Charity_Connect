import React from "react";
import "./Topbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import Avatar from "../Avatar/Avatar";
import { useForm } from "react-hook-form";
import { IoMdNotifications, IoMdMenu } from "react-icons/io";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "the search can't be empty" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "the search can't have space",
    }),
});

export default function Topbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    // navigate(`/search/${title}`);
    reset();
  }
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
        <form onSubmit={handleSubmit(onSearch)}>
          <input
            type="text"
            {...register("title")}
            placeholder="Search by title"
          />
        </form>
        {errors.title && <p>{errors.title.message}</p>}
      </div>
    </div>
  );
}

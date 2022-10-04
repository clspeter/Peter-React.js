import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="bg-header p-2 shadow d-flex justify-content-between">
      <div className="text-light">
        <i className="bi bi-life-preserver"></i>
        <span className="fs-5 ps-2">React</span>
      </div>
      <div>
        <NavLink
          to="/"
          className="text-decotration-none px-1 text-secondary"
          activateclassname="text-light"
          exact="true"
        >
          Home
        </NavLink>
        <NavLink
          to="/news"
          className="text-decotration-none px-1 text-secondary"
          activateclassname="text-light"
        >
          News
        </NavLink>
        <NavLink
          to="/todolist"
          className="text-decotration-none px-1 text-secondary"
          activateclassname="text-light"
        >
          TodoList
        </NavLink>
        <NavLink
          to="/about"
          className="text-decotration-none px-1 text-secondary"
          activateclassname="text-light"
        >
          About
        </NavLink>
        <button
          className="btn btn-primary btn-sm mx-1"
          onClick={(event) => {
            props.onLangBtnClick();
          }}
        >
          {props.lang ? "Eng" : "中文"}
        </button>
      </div>
    </div>
  );
};

export default Header;

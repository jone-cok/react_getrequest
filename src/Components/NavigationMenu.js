import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <ul>
      <li className="text-blue-500 p-3  border-b ">
        <Link onClick={props.closeMenu} to="/">
          Home
        </Link>
      </li>
      <li className=" text-blue-500 p-3  border-b ">
        <Link onClick={props.closeMenu} to="/about">
          About
        </Link>
      </li>
      <li className=" text-blue-500 p-3  border-b ">
        <Link onClick={props.closeMenu} to="/login">
          Login
        </Link>
      </li>
      <li className=" text-blue-500 p-3  border-b ">
        <Link onClick={props.closeMenu} to="/signup">
          SignUp
        </Link>
      </li>
      <li className=" text-blue-500 p-3  border-b ">
        <Link onClick={props.closeMenu} to="/product/:id">
          Product
        </Link>
      </li>
    </ul>
  );
}

export default NavigationMenu;

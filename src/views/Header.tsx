import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/Logo";

export const Header = () => {
  return (
    <Link to="/">
      <div className=" flex justify-start bg-purple-100 border-b-2 border-purple-100 w-screen p-4 mb-4 h-18">
        <Logo />
      </div>
    </Link>
  );
};

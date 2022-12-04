import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <div className=" flex justify-center bg-purple-500 w-screen p-4 mb-4 h-18">
        Header
      </div>
    </Link>
  );
};

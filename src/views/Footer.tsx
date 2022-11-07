import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="p-4  bg-white mb-2 w-full flex justify-center align-center border-t border-gray-200  fixed bottom-0">
    <Link to="/">
      <span className=" text-xs flex  p-3 rounded-md text-gray-600 border-gray-600 hover:bg-purple-200 hover:text-purple-600 hover:border-gray-900">
        Home
      </span>
    </Link>
    <Link to="/faq">
      <span className=" text-xs flex  p-3 rounded-md text-gray-600 border-gray-600 hover:bg-purple-200 hover:text-purple-600 hover:border-gray-900">
        שאלות נפוצות
      </span>
    </Link>
    <Link to="/contact">
      <span className=" text-xs flex  p-3 rounded-md text-gray-600 border-gray-600 hover:bg-purple-200 hover:text-purple-600 hover:border-gray-900">
        צור קשר
      </span>
    </Link>
    <Link to="/balance">
      <span className=" text-xs flex bg-white  p-3 rounded-md text-gray-600 border-gray-600 hover:bg-purple-200 hover:text-purple-600 hover:border-gray-900">
        manage your sim
      </span>
    </Link>
  </footer>
);

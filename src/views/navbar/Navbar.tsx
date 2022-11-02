import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex justify-center ">
      <Link to="/">
        <span className=" inline-block  text-gray-800 hover:text-gray-600 mr-4">
          Home
        </span>
      </Link>
      <Link to="/faq">
        <span className="inline-block text-gray-800 hover:text-gray-600 mr-4">
          שאלות נפוצות
        </span>
      </Link>
      <Link to="/contact">
        <span className="inline-block text-gray-800 hover:text-gray-600 mr-4">
          צור קשר
        </span>
      </Link>
      <Link to="/balance">
        <span className="inline-block  text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900">
          manage your sim
        </span>
      </Link>
    </nav>
  );
};

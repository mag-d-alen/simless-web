import React, { ReactNode } from "react";

export const EditButton: React.FC<{
  handleClick: () => void;
  icon?: ReactNode;
  summary: string;
}> = ({ handleClick, icon, summary }) => {
  return (
    <>
      <button
        type="button"
        className="text-purple bg-white hover:bg-purple-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm pl-5 text-center flex items-center  m-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 dark:text-white"
        onClick={handleClick}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalFullscreen">
        {summary}
        {icon ? icon : null}
      </button>
    </>
  );
};

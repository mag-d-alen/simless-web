import React, { ReactNode } from "react";


export const EditButton: React.FC<{
  handleClick: () => void;
  icon?: ReactNode;
  summary: string;
  showToast: (v: boolean) => void;
}> = ({ handleClick, showToast, icon, summary }) => {
 
  return (
    <button
      className={
        "bg-gray-100 flex  bg-white items-center justify-center m-2 rounded-lg border border-purple-200/80 text-sm  text-center  disabled:bg-gray-100 hover: border-purple-400 focus:ring-4 focus:outline-none focus:ring-purple-400  pl-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 dark:text-white"
      }
      onClick={handleClick}>
      {summary}
      {icon ? icon : null}
    </button>
  );
};

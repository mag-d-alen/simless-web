import React, { ReactNode } from "react";

export const EditButton: React.FC<{
  handleClick: () => void;
  icon?: ReactNode;
  summary: string;
  disabled?: boolean;
}> = ({ handleClick, icon, summary, disabled = false }) => {
  return (
    <button
      type="button"
      className="bg-white hover:bg-purple-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm pl-5 text-center flex items-center  m-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 dark:text-white"
      onClick={handleClick}>
      {summary}
      {icon ? icon : null}
    </button>
  );
};

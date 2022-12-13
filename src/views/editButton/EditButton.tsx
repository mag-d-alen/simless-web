import React, { ReactNode } from "react";

export const EditButton: React.FC<{
  handleClick: () => void;
  icon?: ReactNode;
  summary: string;
  disabled?: boolean;
}> = ({ handleClick, icon, summary, disabled = false }) => {
  return (
    <div
      className="flex w-full items-center justify-center m-2 rounded-lg border border-purple-200/80 text-sm  text-center hover: border-purple-400 focus:ring-4 focus:outline-none focus:ring-purple-600  pl-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 dark:text-white"
      onClick={handleClick}>
      {summary}
      {icon ? icon : null}
    </div>
  );
};

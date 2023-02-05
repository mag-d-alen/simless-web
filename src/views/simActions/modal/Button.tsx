import React from "react";

export const Button: React.FC<{
  handleClick?: () => void;
  text?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}> = ({
  handleClick = () => {},
  text = "close",
  type = "button",
  disabled = false,
}) => {
  return (
    <div className="  flex content-center justify-center mt-4">
      <button
        disabled={disabled}
        type={type}
        className="flex content-center m-2 justify-center w-40 text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-600"
        onClick={() => {
          handleClick();
        }}>
        {text}
      </button>
    </div>
  );
};

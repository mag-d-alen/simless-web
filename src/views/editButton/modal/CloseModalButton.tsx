import React from "react";

export const CloseModalButton: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  return (
    <button
      type="button"
      className="inline-block px-6 py-2.5 bg-purple-600 mx-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={() => {
        closeDialog();
      }}>
      close
    </button>
  );
};

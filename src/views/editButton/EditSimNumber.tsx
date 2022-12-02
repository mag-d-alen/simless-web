import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSimNumber } from "../../redux/api/SimActionsSlice";

export const EditSimNumber: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();

  const [userInputNumber, setUserInputNumber] = useState("");

  return (
    <div className="flex items-center justify-center">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        placeholder="מספר הסים"
        onChange={(e) => setUserInputNumber(e.target.value)}
      />
      <div className=" flex flex-shrink-0 items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            userInputNumber &&
              dispatch(setSimNumber(parseInt(userInputNumber)));
            closeDialog();
          }}>
          שמור שינויים
        </button>
      </div>
    </div>
  );
};

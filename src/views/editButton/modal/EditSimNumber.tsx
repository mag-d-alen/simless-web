import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSimNumber } from "../../../redux/SimActionsSlice";
import { ModalButtons } from "./ModalButtons";

export const EditSimNumber: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();

  const [userInputNumber, setUserInputNumber] = useState("");

  return (
    <>
      <input
        className="shadow appearance-none border-purple-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-purple-200 focus:shadow-outline"
        placeholder="מספר הסים"
        onChange={(e) => setUserInputNumber(e.target.value)}
      />
      <ModalButtons
        clickHandler={() => {
          userInputNumber && dispatch(setSimNumber(parseInt(userInputNumber)));
          closeDialog();
        }}
      ></ModalButtons>
    </>
  );
};

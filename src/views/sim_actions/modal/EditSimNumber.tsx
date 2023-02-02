import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSimNumber } from "../../../redux/SimActionsSlice";
import { ModalButton } from "./ModalButton";

export const EditSimNumber: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();
  const [userInputNumber, setUserInputNumber] = useState("");
 const { simNumber, simStartDate, addedMinutesinUSD, addedData } = useSelector(
   (s: any) => s.simActions
 );
  return (
    <>
      <input
        className="shadow appearance-none border-purple-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-purple-200 focus:shadow-outline"
        placeholder="מספר הסים"
        onChange={(e) => setUserInputNumber(e.target.value)}
      />
       <ModalButton
        clickHandler={() => {
          userInputNumber && dispatch(setSimNumber(parseInt(userInputNumber)));
          closeDialog();
        }}
      ></ModalButton> 



      
    </>
  );
};

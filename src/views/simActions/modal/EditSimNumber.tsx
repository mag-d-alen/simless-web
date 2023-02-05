import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewSim, setSimNumber } from "../../../redux/SimActionsSlice";
import { ModalButton } from "./ModalButton";
import { Button } from "./Button";

export const EditSimNumber: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();
  const [userInputNumber, setUserInputNumber] = useState<string>("");
  const [orderingNewSim, setOrderingNewSim] = useState<boolean>(false);
  const { newSim } = useSelector((s: any) => s.simActions);
  return (
    <>
      <div className="flex flex-col w-full h-40 items-center gap-4 ">
        <h3>בחר מספר הסים</h3>
        <div className="flex w-full h-20 items-center justify-end gap-4 ">
          {!orderingNewSim ? (
            //validation for phone number

            <input
              className="shadow appearance-none border-purple-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-purple-200 focus:shadow-outline"
              placeholder="מספר הסים"
              onChange={(e) => setUserInputNumber(e.target.value)}
            />
          ) : null}
        </div>
        <div className="flex w-full items-center justify-center gap-4 ">
          <input
            className="w-6 h-6 text-purple-500 bg-gray-100 border-gray-300 rounded focus:ring-purple-300 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            onChange={() => setOrderingNewSim(!orderingNewSim)}
          />
          <h3 className="text-bold text-gray-500 text-lg">
            אין לי סים
          </h3>
        </div>
      </div>
      <ModalButton
        clickHandler={() => {
          orderingNewSim
            ? dispatch(setNewSim(true))
            : userInputNumber &&
              dispatch(setSimNumber(parseInt(userInputNumber)));
          closeDialog();
        }}></ModalButton>
    </>
  );
};

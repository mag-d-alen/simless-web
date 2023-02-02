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
        <div className="flex w-full items-center justify-end gap-4 ">
          <input
            type="checkbox"
            onChange={() => setOrderingNewSim(!orderingNewSim)}
          />
          <h3>אין לי סים</h3>
        </div>
        {!orderingNewSim ? (
          <input
            className="shadow appearance-none border-purple-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-purple-200 focus:shadow-outline"
            placeholder="מספר הסים"
            onChange={(e) => setUserInputNumber(e.target.value)}
          />
        ) : null}
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

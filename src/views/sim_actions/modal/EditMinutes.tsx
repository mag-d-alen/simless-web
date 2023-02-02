import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddedMinutesinUSD } from "../../../redux/SimActionsSlice";
import { DisplayMinutes } from "./DisplayMinutes";
import { ModalButton } from "./ModalButton";
import { RangeSlider } from "./RangeSlider";

export const EditMinutes: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();
  const [dollars, setDollars] = useState<number>(0);
  return (
    <>
      <RangeSlider setDollars={setDollars} />
      <DisplayMinutes dollars={dollars} />
       <ModalButton
        clickHandler={() => {
          dispatch(setAddedMinutesinUSD(dollars));
          closeDialog();
        }}
      /> 
    </>
  );
};

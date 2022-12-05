import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddedMinutesinUSD } from "../../../redux/SimActionsSlice";
import { DisplayMinutes } from "./DisplayMinutes";
import { ModalButtons } from "./ModalButtons";
import { RangeSlider } from "./RangeSlider";

export const EditMinutes: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();
  const [dollars, setDollars] = useState<number>(0);
  return (
    <>
      <div className="flex-col">
        <RangeSlider setDollars={setDollars} />
        <DisplayMinutes dollars={dollars} />
      </div>
      <ModalButtons
        closeDialog={closeDialog}
        clickHandler={() => dispatch(setAddedMinutesinUSD(dollars))}
      />
    </>
  );
};

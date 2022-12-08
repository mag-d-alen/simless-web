import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { setSimStartDate } from "../../../redux/SimActionsSlice";
import { ModalButtons } from "./ModalButtons";

export const EditDate: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const [value, setValue] = useState<any>({
    startDate: null,
  });
  const dispatch = useDispatch();
  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Datepicker
        datepicker-format="dd/mm/yyyy"
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />

      <ModalButtons
        closeDialog={closeDialog}
        clickHandler={() => {
          value && dispatch(setSimStartDate(value.startDate));
          closeDialog();
        }}
      />
    </>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";

import { setSimStartDate } from "../../../redux/SimActionsSlice";
import { ModalButton } from "./ModalButton";

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
        // @ts-ignore
        containerClassName="w-full"
        primaryColor="violet"
        placeholder="dd/mm/yyyy"
        datepicker-format="dd/mm/yyyy"
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />
       <ModalButton
        clickHandler={() => {
          value && dispatch(setSimStartDate(value.startDate));
          closeDialog();
        }}
      /> 
    </>
  );
};

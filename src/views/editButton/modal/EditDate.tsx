import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { setSimStartDate } from "../../../redux/api/simActionsSlice";
import { CloseModalButton } from "./CloseModalButton";

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
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />
      <div className=" flex flex-shrink-0 items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            value && dispatch(setSimStartDate(value.startDate));
            closeDialog();
          }}>
          שמור השינויים
        </button>
        <CloseModalButton closeDialog={closeDialog} />
      </div>
    </>
  );
};

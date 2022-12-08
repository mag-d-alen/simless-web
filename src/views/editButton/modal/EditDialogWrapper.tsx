import React, { useState } from "react";
import { AddAnimation } from "../../../stylingComponents/AddAnimation";
import { CloseDialogIcon } from "../icons/CloseDialogIcon";
import { EditData } from "./EditData";
import { EditDate } from "./EditDate";
import { EditMinutes } from "./EditMinutes";
import { EditSelectCountry } from "./EditSelectCountry";
import { EditSimNumber } from "./EditSimNumber";

export const EditDialogWrapper: React.FC<{
  closeDialog: () => void;
  dialogType: string;
  summary: string;
}> = ({ closeDialog, dialogType, summary }) => {
  return (
    <AddAnimation className=" fixed top-0 left-0 right-0 backdrop-blur-sm	 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative w-full h-full ">
        <div className="relative rounded-lg min-h-full  md:mx-40 md:my-8 bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl px-4 font-medium text-gray-900 dark:text-white">
              {summary}
            </h3>
            <button
              onClick={closeDialog}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <CloseDialogIcon />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            {dialogType === "number" && (
              <EditSimNumber closeDialog={closeDialog} />
            )}
            {dialogType === "date" && <EditDate closeDialog={closeDialog} />}
            {dialogType === "countries" && (
              <EditSelectCountry closeDialog={closeDialog} />
            )}
            {dialogType === "minutes" && (
              <EditMinutes closeDialog={closeDialog} />
            )}
            {dialogType === "data" && <EditData closeDialog={closeDialog} />}
          </div>
        </div>
      </div>
    </AddAnimation>
  );
};

import React, { useState } from "react";
import { EditButton } from "../EditButton";
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
    <>
      <div className="text-xl font-medium leading-normal text-gray-800 flex justify-center ">
        {summary}
      </div>

      <div className="flex flex-col relative p-4 h-full">
        {dialogType === "number" && <EditSimNumber closeDialog={closeDialog} />}
        {dialogType === "date" && <EditDate closeDialog={closeDialog} />}
        {dialogType === "countries" && (
          <EditSelectCountry closeDialog={closeDialog} />
        )}
        {dialogType === "minutes" && <EditMinutes closeDialog={closeDialog} />}
        {dialogType === "data" && <EditData closeDialog={closeDialog} />}
      </div>
    </>
  );
};

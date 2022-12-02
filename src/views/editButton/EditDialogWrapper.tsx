import React, { useState } from "react";
import { EditDate } from "./EditDate";
import { EditSimNumber } from "./EditSimNumber";

export const EditDialogWrapper: React.FC<{
  closeDialog: () => void;
  dialogType: string;
  summary: string;
}> = ({ closeDialog, dialogType, summary }) => {
  return (
    <>
      <h5 className="text-xl font-medium leading-normal text-gray-800 flex justify-center">
        {summary}
      </h5>

      <div className="modal-body relative p-4">
        {dialogType === "number" && <EditSimNumber closeDialog={closeDialog} />}
        {dialogType === "date" && <EditDate closeDialog={closeDialog} />}
      </div>
    </>
  );
};

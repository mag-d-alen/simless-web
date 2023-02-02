import React, { useEffect } from "react";
import { EditData } from "./EditData";
import { EditDate } from "./EditDate";
import { EditMinutes } from "./EditMinutes";
import { EditSimNumber } from "./EditSimNumber";
import { ModalDialogWrapper } from "./ModalDialogWrapper";
import { useSelector } from "react-redux";

export const EditDialogs: React.FC<{
  closeDialog: () => void;
  dialogType?: string;
  summary?: string;
}> = ({ closeDialog, dialogType = "", summary = "" }) => {
  return (
    <>
      <ModalDialogWrapper title={summary} closeDialog={closeDialog}>
        <div className="py-4 px-8 w-full">
          {dialogType === "number" && (
            <EditSimNumber closeDialog={closeDialog} />
          )}
          {dialogType === "date" && <EditDate closeDialog={closeDialog} />}
          {dialogType === "minutes" && (
            <EditMinutes closeDialog={closeDialog} />
          )}
          {dialogType === "data" && <EditData closeDialog={closeDialog} />}
        </div>
      </ModalDialogWrapper>
    </>
  );
};

import React, { useEffect } from "react";
import { EditData } from "./EditData";
import { EditPackage } from "./EditPackage";
import { EditMinutes } from "./EditMinutes";
import { EditSimNumber } from "./EditSimNumber";
import { ModalDialogWrapper } from "./ModalDialogWrapper";
import { useSelector } from "react-redux";
import { EditStartingDate } from "./EditStartingDate";

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
          {dialogType === "date" && (
            <EditStartingDate closeDialog={closeDialog} />
          )}
          {dialogType === "minutes" && (
            <EditMinutes closeDialog={closeDialog} />
          )}
          {dialogType === "chosenPackage" && (
            <EditPackage closeDialog={closeDialog} />
          )}
        </div>
      </ModalDialogWrapper>
    </>
  );
};

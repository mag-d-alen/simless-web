import React, { useState } from "react";
import { AddAnimation } from "../../../stylingComponents/AddAnimation";
import { CloseDialogIcon } from "../icons/CloseDialogIcon";
import { EditData } from "./EditData";
import { EditDate } from "./EditDate";
import { EditMinutes } from "./EditMinutes";
import { EditSelectCountry } from "./EditSelectCountry";
import { EditSimNumber } from "./EditSimNumber";
import { ModalDialogWrapper } from "./ModalDialogWrapper";

export const EditDialogs: React.FC<{
  closeDialog: () => void;
  dialogType?: string;
  summary?: string;
}> = ({ closeDialog, dialogType = "", summary = "" }) => {
  return (
    <ModalDialogWrapper title={summary} closeDialog={closeDialog}>
      <div className="p-6 space-y-6">
        {dialogType === "number" && <EditSimNumber closeDialog={closeDialog} />}
        {dialogType === "date" && <EditDate closeDialog={closeDialog} />}
        {dialogType === "countries" && (
          <EditSelectCountry closeDialog={closeDialog} />
        )}
        {dialogType === "minutes" && <EditMinutes closeDialog={closeDialog} />}
        {dialogType === "data" && <EditData closeDialog={closeDialog} />}
      </div>
    </ModalDialogWrapper>
  );
};

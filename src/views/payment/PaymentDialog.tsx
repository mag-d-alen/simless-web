import React from "react";
import { DialogBodyContainer, DialogContainer } from "./payment.styled";
import { CloseDialogIcon } from "../simActions/editButton/icons/CloseDialogIcon";

export const PaymentDialog: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {
  return (
    <DialogContainer show={isOpen}>
      <DialogBodyContainer>
        <button
          onClick={() => {
            close();
          }}>
          <CloseDialogIcon />
        </button>
        this is where iframe payment will
        <iframe></iframe>
      </DialogBodyContainer>
    </DialogContainer>
  );
};

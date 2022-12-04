import React from "react";

import { DialogBodyContainer, DialogContainer } from "./payment.styled";

export const PaymentDialog: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {
  return (
    <DialogContainer show={isOpen}>
      <DialogBodyContainer>
        {/* <Button
          onClick={(e: React.BaseSyntheticEvent<HTMLInputElement>) => {
            e.stopPropagation();
            close();
          }}>
          CANCEL
        </Button> */}
        <iframe></iframe>
      </DialogBodyContainer>
    </DialogContainer>
  );
};

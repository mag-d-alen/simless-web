import React from "react";
import { ModalDialogWrapper } from "../simActions/modal/ModalDialogWrapper";
import { CartContent } from "./CartContent";
import { UserDetails } from "../form/UserDetails";
import { useSelector } from "react-redux";

export const Cart: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const { firstName } = useSelector((s: any) => s.topUp);
  return (
    <ModalDialogWrapper
      title={"כרטיסי סים בסל הקניות"}
      closeDialog={closeDialog}>
      <div className="flex flex-col">
        <CartContent />
        <UserDetails closeDialog={closeDialog} />
        {firstName}
      </div>
    </ModalDialogWrapper>
  );
};

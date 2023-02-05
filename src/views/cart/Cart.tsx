import React from "react";
import { ModalDialogWrapper } from "../simActions/modal/ModalDialogWrapper";
import { CartContent } from "./CartContent";
import { UserDetails } from "../form/UserDetails";
import { useSelector } from "react-redux";

export const Cart: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const { order } = useSelector((s: any) => s.simActions);
  if (!order.length) closeDialog();
  return (
    <ModalDialogWrapper
      title={"כרטיסי סים בסל הקניות"}
      closeDialog={closeDialog}>
      <div className="flex flex-col">
        <CartContent />
        <UserDetails closeDialog={closeDialog} />
      </div>
    </ModalDialogWrapper>
  );
};

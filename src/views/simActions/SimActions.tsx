import React, { useState } from "react";
import { EditDialogs } from "./modal/EditDialogs";
import { Toast } from "./editButton/icons/Toast";
import { EditButtons } from "./editButton/EditButtons";
import { CartShortcut } from "./CartShortcut";
import { SubmitButtons } from "./SubmitButtons";

export const SimActions: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const updateShowCart = (val: boolean) => {
    setShowCart(val);
  };

  return (
    <div>
      <>
        <CartShortcut updateShowCart={updateShowCart} />
        {showToast ? (
          <Toast
            text={"בחרו את מדינת היעד"}
            closeToast={() => setShowToast(false)}
          />
        ) : null}

        <EditButtons
          showToast={setShowToast}
          openEditDialog={setOpenEditDialog}
        />
      </>
      {openEditDialog ? (
        <EditDialogs
          dialogType={openEditDialog.type}
          summary={openEditDialog.summary}
          closeDialog={() => setOpenEditDialog(null)}
        />
      ) : null}
      <SubmitButtons updateShowCart={updateShowCart} showCart={showCart} />
    </div>
  );
};

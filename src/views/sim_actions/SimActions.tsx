import React, { useState } from "react";
import { EditDialogs } from "../editButton/modal/EditDialogs";
import { SelectCountry } from "./SelectCountry";
import { Toast } from "../editButton/icons/Toast";
import { EditButtons } from "../editButton/EditButtons";

export const SimActions: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <>
        {showToast ? (
          <Toast
            text={"בחרו את מדינת היעד"}
            closeToast={() => setShowToast(false)}
          />
        ) : null}
        <SelectCountry />
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
    </div>
  );
};

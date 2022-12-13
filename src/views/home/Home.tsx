import React, { useState } from "react";
import { EditDialogWrapper } from "../editButton/modal/EditDialogWrapper";
import { SelectCountry } from "./SelectCountry";
import { Toast } from "../editButton/icons/Toast";
import { EditButtons } from "../editButton/EditButtons";

export const Home: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null)
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex content-center flex-col bg-white p-4 w-full rounded mt-2">
      <SelectCountry />
      {!openEditDialog ? (
        <>
          {showToast ? (
            <Toast
              text={"חבר מדינת היעד"}
              closeToast={() => setShowToast(false)}
            />
          ) : null}
          <EditButtons
            showToast={setShowToast}
            openEditDialog={setOpenEditDialog}
          />
        </>
      ) : (
        <EditDialogWrapper
          dialogType={openEditDialog.type}
          summary={openEditDialog.summary}
          closeDialog={() => setOpenEditDialog(null)}
        />
      )}
    </div>
  );
};

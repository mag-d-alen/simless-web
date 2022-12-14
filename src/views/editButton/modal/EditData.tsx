import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddedData } from "../../../redux/SimActionsSlice";
import { ModalButtons } from "./ModalButtons";

export const EditData: React.FC<{
  closeDialog: () => void;
}> = ({ closeDialog }) => {
  const dispatch = useDispatch();
  const [gbSelected, setGbSelected] = useState<number | null>(null);
  const { selectedCountries } = useSelector((s: any) => s.simActions);
  return (
    <>
      {selectedCountries.length ? (
        <div className="flex flex-col mb-4 ">
          <h2 className="flex text-md justify-center uppercase text-purple-600">
            :תוכלו להישתמש בשים ב
          </h2>

          {selectedCountries.map((c: any) => (
            <span key={c.value} className="flex text-sm justify-center ">
              {c.label}
            </span>
          ))}
        </div>
      ) : null}

      <ModalButtons
        clickHandler={() => {
          if (gbSelected) dispatch(setAddedData(gbSelected));
          closeDialog();
        }}
      />
    </>
  );
};

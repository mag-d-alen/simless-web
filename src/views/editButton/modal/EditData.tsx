import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalButtons } from "./ModalButtons";
import { useGetPackagesQuery } from "../../../redux/api/packagesApi";
import { AvailablePackages } from "../../availablePackages/AvailablePackages";
import { setChosenPackage } from "../../../redux/SimActionsSlice";

export const EditData: React.FC<{
  closeDialog: () => void;
}> = ({ closeDialog }) => {
  const dispatch = useDispatch();
  const [packageSelected, setPackageSelected] = useState<number | null>(null);
  const { selectedCountries } = useSelector((s: any) => s.simActions);
  const { isLoading } = useGetPackagesQuery(selectedCountries);

  return (
    <>
      {isLoading ? <div>Loading...</div> : <AvailablePackages />}
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
          if (packageSelected) dispatch(setChosenPackage(packageSelected));
          closeDialog();
        }}
      />
    </>
  );
};

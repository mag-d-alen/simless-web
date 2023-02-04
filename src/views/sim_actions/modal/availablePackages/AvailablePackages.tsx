import React, { useState } from "react";
import { useGetPackagesQuery } from "../../../../redux/api/packagesApi";
import { Package } from "./Package";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../../../../data/data";
import { ModalButton } from "../ModalButton";
import {
  setChosenPackage,
  setSelectedCountries,
} from "../../../../redux/SimActionsSlice";
import { SimPackageType } from "../../../../data/types";
import { Button } from "../Button";

export const AvailablePackages: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const { selectedCountries, chosenPackage } = useSelector(
    (s: any) => s.simActions
  );
  // const { data: simPackages } = useGetPackagesQuery(selectedCountries);
  //this is a dummy object not to break the ux until we have data from API
  const dispatch = useDispatch();
  const [pack, setPack] = useState<SimPackageType | null>(null);
  const choosePackage = (pack: SimPackageType | null) => {
    setPack(pack);
  };
  const allSimPackages = test; // this will be data from API
  const relevantPackages = selectedCountries.length
    ? allSimPackages.filter((sp: SimPackageType) =>
        selectedCountries.every(
          (selectedCountry: { label: string; value: string }) =>
            sp.countries.includes(selectedCountry.value)
        )
      )
    : [];
  const reset = () => {
    setPack(null);
    setSelectedCountries([]);
    dispatch(setChosenPackage(null));
  };

  return (
    <div>
      <h3 className="flex justify-center">בחרו חבילה</h3>
      {relevantPackages.length
        ? relevantPackages.map((simPackage: SimPackageType) => (
            <Package
              key={simPackage.id}
              simPackage={simPackage}
              choose={choosePackage}
              chosen={
                simPackage.id === pack?.id ||
                chosenPackage?.id === simPackage.id
              }
            />
          ))
        : null}
      <div className="flex w-full gap-2 items-center justify-center py-4 flex-col xs:flex-row ">
        <ModalButton
          clickHandler={() => {
            dispatch(setChosenPackage(pack));
            closeDialog();
          }}
        />
        <ModalButton text="נקה" clickHandler={() => reset()} />
      </div>
    </div>
  );
};

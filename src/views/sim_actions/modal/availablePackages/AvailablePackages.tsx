import React, { useState } from "react";
import { useGetPackagesQuery } from "../../../../redux/api/packagesApi";
import { Package } from "./Package";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../../../../data/data";
import { ModalButton } from "../ModalButton";
import { setChosenPackage } from "../../../../redux/SimActionsSlice";

export const AvailablePackages: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const { selectedCountries } = useSelector((s: any) => s.simActions);
  // const { data: simPackages } = useGetPackagesQuery(selectedCountries);
  //this is a dummy object not to break the ux until we have data from API
  const dispatch = useDispatch();
  const [pack, setPack] = useState();
  const choosePackage = (pack: any) => {
    setPack(pack);
  };
  const simPackages = test;
  const packages = [] as string[];
  selectedCountries.forEach((sc: any) =>
    simPackages.map(
      (sp: any) => sp["countries"].includes(sc.value) && packages.push(sp)
    )
  );
  return (
    <div>
      <h3 className="flex justify-center">בחרו חבילה</h3>
      {packages.length
        ? packages.map((simPackage: any) => (
            <Package
              key={simPackage.id}
              simPackage={simPackage}
              choose={choosePackage}
            />
          ))
        : null}
      <ModalButton
        clickHandler={() => {
          dispatch(setChosenPackage(pack));
          closeDialog();
        }}
      />
    </div>
  );
};

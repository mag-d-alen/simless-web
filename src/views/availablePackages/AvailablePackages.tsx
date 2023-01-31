import React from "react";
import { useGetPackagesQuery } from "../../redux/api/packagesApi";
import { Package } from "./Package";
import { useSelector } from "react-redux";

export const AvailablePackages: React.FC = () => {
  const { selectedCountries } = useSelector((s: any) => s.simActions);
  // const { data: simPackages } = useGetPackagesQuery(selectedCountries);
  //this is a dummy object not to break the ux until we have data from API
  const simPackages = [{ id: 1, name: "easternEurope" }];
  return (
    <div>
      {simPackages.map((simPackage: any) => (
        <Package key={simPackage.id} simPackage={simPackage} />
      ))}
    </div>
  );
};

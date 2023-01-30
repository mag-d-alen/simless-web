import React from "react";
import { useGetPackagesQuery } from "../../redux/api/packagesApi";
import { Package } from "./Package";
import { useSelector } from "react-redux";

export const AvailablePackages: React.FC = () => {
  const { selectedCountries } = useSelector((s: any) => s.simActions);
  const { data: simPackages } = useGetPackagesQuery(selectedCountries);

  return (
    <div>
      {simPackages.map((simPackage: any) => (
        <Package key={simPackage.id} simPackage={undefined} />
      ))}
    </div>
  );
};

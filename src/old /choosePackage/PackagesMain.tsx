import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import { packages } from "../../data/data";
import { PackageCard } from "./packages/PackageCard";
import { PackagesContainer } from "./packages/packages.styled";
import { RangeSlider } from "./packages/addMinutes/RangeSlider";
import { AddMinutes } from "./packages/addMinutes/AddMinutesMain";

export const PackagesMain: React.FC = () => {
  const { selectedCountries } = useSelector((s: any) => s.choosePackage);

  const findPackages = () => {
    const deals: { name: string; countries: string[] }[] = [];
    selectedCountries.forEach((country: { label: string; value: string }) => {
      for (let i = 0; i < packages.length; i++) {
        if (packages[i].countries.includes(country.value))
          deals.push(packages[i]);
      }
    });
    return deals;
  };

  return (
    <>
      <div className="flex justify-center align-center">חפש לפי מדינה</div>
      {/* <SelectCountry /> */}
      {selectedCountries.length ? (
        <>
          <div className="flex justify-center align-center mb-8">
            חבילות מומלצות
          </div>
          <AddMinutes />
          <PackagesContainer>
            {findPackages().map(
              (deal: { name: string; countries: string[] }) => (
                <PackageCard deal={deal} />
              )
            )}
          </PackagesContainer>
        </>
      ) : null}
    </>
  );
};

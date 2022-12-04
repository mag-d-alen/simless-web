import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setChosenDeal } from "../../../../redux/packagesSlice";
import { setCheckoutStep } from "../../../../redux/TopUpSlice";
import { Button } from "../../../editButton/modal/Button";
import { ChipIcon } from "./ChipIcon";
import {
  PackageCardContainer,
  PackageCardTitle,
  PackageCardCountries,
  PackageCardBody,
  PackageCardGigaOption,
  PackageCardPrice,
  PackageCardButtons,
} from "./packages.styled";

export const PackageCard: React.FC<{
  deal: { name: string; countries: string[] };
}> = ({ deal }) => {
  const { name, countries } = deal;
  const [chosen, setChosen] = useState({ name: "", ticked: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setChosenDeal(chosen.name));
    dispatch(setCheckoutStep(2));
  };
  return (
    <PackageCardContainer>
      <PackageCardTitle>
        <ChipIcon></ChipIcon>
        {name}
      </PackageCardTitle>
      <PackageCardCountries>{countries}</PackageCardCountries>
      <form onSubmit={(e) => handleSubmit(e)}>
        <PackageCardBody>
          {["1G", "3G", "5G"].map((g) => {
            return (
              <PackageCardGigaOption key={g}>
                {g}
                <input
                  type="checkbox"
                  value={g}
                  checked={name === chosen.name && g === chosen.ticked}
                  onChange={(e) => {
                    setChosen({
                      name: name,
                      ticked:
                        chosen.ticked === e.target.value ? "" : e.target.value,
                    });
                  }}
                />
              </PackageCardGigaOption>
            );
          })}
        </PackageCardBody>
        <PackageCardPrice>180 ש`ח</PackageCardPrice>
        <PackageCardButtons>
          <Button text="checkout" type="submit" handleClick={() => {}} />
          <Button text=" Add To Cart" type="submit" handleClick={() => {}} />
        </PackageCardButtons>
      </form>
    </PackageCardContainer>
  );
};

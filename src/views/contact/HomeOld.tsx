import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EditButton } from "../editButton/EditButton";
import { DateIcon } from "../editButton/icons/DateIcon";
import { EditDialogWrapper } from "../editButton/modal/EditDialogWrapper";
import { SimIcon } from "../editButton/icons/SimIcon";
import { SelectedCountryType } from "../../data/types";

export const HomeOld: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null);

  // const chosenDeal = useSelector((s: any) => s.simPurchase.chosenDeal);
  // const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  const { simNumber, simStartDate, selectedCountries } = useSelector(
    (s: any) => s.simActions
  );

  return (
    <>
      {!openEditDialog ? (
        <div className="flex flex-col align-center  bg-gray-100 text-gray-700 ">
          <EditButton
            disabled={!!selectedCountries.length}
            handleClick={() =>
              setOpenEditDialog({
                type: "number",
                summary: simNumber
                  ? `${simNumber} מספר הסים`
                  : "תבחר מספר הסים",
              })
            }
            summary={simNumber ? `${simNumber} מספר הסים` : "תבחר מספר הסים"}
            icon={<SimIcon />}
          />

          <EditButton
            disabled={!!selectedCountries.length}
            handleClick={() =>
              setOpenEditDialog({
                summary: simStartDate
                  ? `${simStartDate} תאריך הפעלת הסים`
                  : "תבחר תאריך הפעלת הסים",

                type: "date",
              })
            }
            summary={
              simStartDate
                ? `${simStartDate} תאריך הפעלת הסים`
                : "תבחר תאריך הפעלת הסים"
            }
            icon={<DateIcon />}
          />
          <EditButton
            disabled={!!selectedCountries.length}
            handleClick={() =>
              setOpenEditDialog({
                type: "countries",
                summary: selectedCountries.length
                  ? `${selectedCountries.map(
                      (c: SelectedCountryType) => c.label
                    )}`
                  : " ? לאן אתם נוסעים ",
              })
            }
            summary={
              selectedCountries.length
                ? `${selectedCountries.map(
                    (c: SelectedCountryType) => c.label
                  )}`
                : " ? לאן אתם נוסעים "
            }
            icon={<DateIcon />}
          />
          {/* <EditButton
            handleClick={() => setOpenEditDialog("")}
            summary={
              simStartDate
                ? `${simStartDate} תאריך הפעלת הסים`
                : "תבחר תאריך הפעלת הסים"
            }
            icon={<DateIcon />}
          />
          <EditButton
            handleClick={() => setOpenEditDialog("")}
            summary={
              simStartDate
                ? `${simStartDate} תארוך הפעלת הסים`
                : "תבחר תארוך הפעלת הסים"
            }
            icon={<DateIcon />}
          /> */}
        </div>
      ) : (
        <EditDialogWrapper
          dialogType={openEditDialog.type}
          summary={openEditDialog.summary}
          closeDialog={() => setOpenEditDialog(null)}
        />
      )}
    </>
  );
};

{
  /* <ProgressBar value={ checkoutStep*25} />
      {chosenDeal.length && checkoutStep > 1 ? (
        <PaymentSteps />
      ) : (
        <PackagesMain />
      )} */
}

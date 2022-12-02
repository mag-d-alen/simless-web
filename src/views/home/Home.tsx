import React, { useState } from "react";
import { PaymentSteps } from "../payment/PaymentSteps";
import { HomeContainer, Typography } from "./home.styled";
import { useSelector } from "react-redux";
import { PackagesMain } from "./choosePackage/PackagesMain";
import { ProgressBar } from "../ProgressBar";
import { EditButton } from "../editButton/EditButton";
import { DateIcon } from "../editButton/DateIcon";
import { EditDialogWrapper } from "../editButton/EditDialogWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimIcon } from "../editButton/SimIcon";
import { number } from "yup";

export const Home: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState<{
    type: string;
    summary: string;
  } | null>(null);

  const chosenDeal = useSelector((s: any) => s.simPurchase.chosenDeal);
  const checkoutStep = useSelector((s: any) => s.topUp.checkoutStep);
  const { simNumber, simStartDate } = useSelector((s: any) => s.simActions);

  return (
    <>
      {!openEditDialog ? (
        <div className="flex flex-col align-center  bg-gray-100 text-gray-700 ">
          <EditButton
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
          {/* <EditButton
            handleClick={() =>
              simNumber
                ? setOpenEditDialog(`${simNumber} תערוך מספר הסים`)
                : setOpenEditDialog("תערוך מיספר הסים ")
            }
             summary={
              simStartDate
                ? `${simStartDate} תארוך הפעלת הסים`
                : "תבחר תארוך הפעלת הסים"
            }
            icon={<SimIcon />}
          />
          <EditButton
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

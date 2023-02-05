import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DataIcon } from "./icons/DataIcon";
import { DateIcon } from "./icons/DateIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { SimIcon } from "./icons/SimIcon";
import { Button } from "../modal/Button";
import { useDispatch } from "react-redux";
import { resetSimOrder, setSimOrder } from "../../../redux/SimActionsSlice";
import { EditButton } from "./EditButton";
import { SubmitButtons } from "../SubmitButtons";

export const EditButtons: React.FC<{
  showToast: (val: boolean) => void;
  openEditDialog: (val: { type: string; summary: string }) => void;
}> = ({ showToast, openEditDialog }) => {
  const dispatch = useDispatch();
  const [addedSim, setAddedSim] = useState(false);
  const {
    simNumber,
    simStartDate,
    addedMinutesInUSD,
    chosenPackage,
    newSim,
    id,
  } = useSelector((s: any) => s.simActions);

  const addSimOrder = () => {
    dispatch(
      setSimOrder({
        simNumber,
        simStartDate,
        addedMinutesInUSD,
        chosenPackage,
        newSim,
        id,
      })
    );
    setAddedSim(!addedSim);
  };

  return (
    <div className="flex flex-col align-center overflowY-hidden mt-4 py-4 text-gray-700 px-8">
      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            type: "number",
            summary:
              simNumber | newSim
                ? simNumber
                  ? `${simNumber} מספר הסים`
                  : "סים חדש"
                : "בחרו מספר סים",
          })
        }
        summary={
          simNumber | newSim
            ? simNumber
              ? `${simNumber} מספר הסים`
              : "סים חדש"
            : "בחרו מספר סים"
        }
        icon={<SimIcon />}
        filled={!!(simNumber || newSim)}
      />

      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            type: "chosenPackage",
            summary: chosenPackage ? " חבילה נבחרה" : "בחרו חבילה",
          })
        }
        summary={chosenPackage ? " חבילה נבחרה" : "בחרו חבילה"}
        icon={<DataIcon />}
        filled={!!chosenPackage}
      />

      {chosenPackage ? (
        <EditButton
          showToast={showToast}
          handleClick={() =>
            openEditDialog({
              summary: simStartDate
                ? `${simStartDate} תאריך הפעלת החבילה`
                : "בחרו תאריך הפעלת החבילה",

              type: "date",
            })
          }
          summary={
            simStartDate
              ? `${simStartDate} תאריך הפעלת החבילה`
              : "בחרו תאריך הפעלת החבילה"
          }
          icon={<DateIcon />}
          filled={!!simStartDate}
        />
      ) : null}

      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            type: "minutes",
            summary: addedMinutesInUSD
              ? ` הוספת ${addedMinutesInUSD}$ זמן אוויר `
              : " ?הלו, אמא",
          })
        }
        summary={
          addedMinutesInUSD
            ? ` הוספת ${addedMinutesInUSD}$ זמן אוויר `
            : " ?הלו, אמא"
        }
        icon={<PhoneIcon />}
        filled={!!addedMinutesInUSD}
      />
    </div>
  );
};

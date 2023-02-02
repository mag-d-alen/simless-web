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

export const EditButtons: React.FC<{
  showToast: (val: boolean) => void;
  openEditDialog: (val: { type: string; summary: string }) => void;
}> = ({ showToast, openEditDialog }) => {
  const dispatch = useDispatch();
  const [addedSim, setAddedSim] = useState(false);
  const { simNumber, simStartDate, addedMinutesInUSD, chosenPackage } =
    useSelector((s: any) => s.simActions);

  const addSimOrder = () => {
    dispatch(
      setSimOrder({ simNumber, simStartDate, addedMinutesInUSD, chosenPackage })
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
            summary: simNumber ? `${simNumber} מספר הסים` : "בחרו מספר סים",
          })
        }
        summary={simNumber ? `${simNumber} מספר סים` : "בחרו מספר סים"}
        icon={<SimIcon />}
      />
      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            summary: simStartDate
              ? `${simStartDate} תאריך הפעלת סים`
              : "בחרו תאריך הפעלת הסים",

            type: "date",
          })
        }
        summary={
          simStartDate
            ? `${simStartDate} תאריך הפעלת הסים`
            : "בחרו תאריך הפעלת הסים"
        }
        icon={<DateIcon />}
      />

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
      />
      <EditButton
        showToast={showToast}
        handleClick={() =>
          openEditDialog({
            type: "data",
            summary: chosenPackage
              ? `${chosenPackage}G הוספתם `
              : " ?כמה תרצו לגלוש",
          })
        }
        summary={
          chosenPackage ? `${chosenPackage}G הוספתם ` : " ?כמה תרצו לגלוש"
        }
        icon={<DataIcon />}
      />

      <div className="flex items-center w-full py-4 ">
        {addedSim ? (
          <>
            <Button
              text="add another sim"
              handleClick={() => {
                dispatch(resetSimOrder(true));
                setAddedSim(!addedSim);
              }}
            />
            <Button
              text="go to checkout"
              handleClick={() => dispatch(resetSimOrder(true))}
            />
          </>
        ) : simStartDate?.length ? (
          <Button text="add sim" handleClick={addSimOrder} />
        ) : null}
      </div>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { SimOrderType } from "../../data/types";
import { useDispatch } from "react-redux";
import { updateSimOrder } from "../../redux/SimActionsSlice";
import { CloseDialogIcon } from "../simActions/editButton/icons/CloseDialogIcon";

export const CartContent: React.FC = () => {
  const { order } = useSelector((s: any) => s.simActions);
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    let filteredOrder = order.filter((item: SimOrderType) => item.id !== id);
    dispatch(updateSimOrder(filteredOrder));
  };
  return (
    <div className="flex flex-col mb-16">
      {order.map((item: any) => (
        <div className="flex items-center border-b-2 border-purple-200  justify-around">
          <div onClick={() => removeItem(item.id)}>
            {" "}
            <CloseDialogIcon />
          </div>
          <div className="flex text-right  p-2 m-1 flex flex-col " key={item}>
            <div>
              מספר הסים
              <span className="text-purple-600 px-2 font-bold">
                {item.newSim ? " סים חדש " : ` ${item.simNumber}`}
              </span>
            </div>
            <div>{item.simStartDate}</div>
            <div>
              סכום שהוטען עבור זמן אוויר
              <span className="text-purple-600 px-2 font-bold">
                {item.addedMinutesInUSD}$
              </span>
            </div>
            <div>
              חבילה :
              <span className="text-purple-600 px-2 font-bold">
                {item.chosenPackage}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

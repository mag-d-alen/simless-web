import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "./editButton/icons/Toast";
import { CartIcon } from "./editButton/icons/CartIcon";

export const CartShortcut: React.FC<{
  updateShowCart: (val: boolean) => void;
}> = ({ updateShowCart }) => {
  const { order } = useSelector((s: any) => s.simActions);
  const [showToast, setShowToast] = useState<boolean>(false);
  return (
    <div className="flex w-full justify-end px-8">
      {showToast ? (
        <Toast
          text={"סל הקניות רק בינתיים"}
          closeToast={() => setShowToast(false)}
        />
      ) : null}
      <div
        className="relative py-2"
        onClick={() => {
          order.length ? updateShowCart(true) : setShowToast(true);
        }}>
        {order.length ? (
          <div className="t-0 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
              {order.length}
            </p>
          </div>
        ) : null}
        <CartIcon />
      </div>
    </div>
  );
};

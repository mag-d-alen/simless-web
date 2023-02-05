import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InvoiceType } from "../../data/types";
import {
  setUserInvoiceInfo,
  setUserPaymentInfo,
} from "../../redux/InvoiceFormSlice";
import { InvoiceForm } from "./InvoiceForm";
import { PaymentDialog } from "../payment/PaymentDialog";

export const UserDetails: React.FC<{ closeDialog: () => void }> = ({
  closeDialog,
}) => {
  const dispatch = useDispatch();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [goToPayment, setGoToPayment] = useState(false);

  const handleSubmit = (values: InvoiceType) => {
    const infoValues = Object.entries(values).reduce(
      (acc, curr) =>
        curr.includes("oneForm") ? acc : { ...acc, [curr[0]]: curr[1] },
      {} as InvoiceType
    );
    if (values.oneForm) {
      dispatch(setUserInvoiceInfo(infoValues));
      dispatch(setUserPaymentInfo(infoValues));
      setShowPaymentForm(false);
      setGoToPayment(true);
    } else {
      if (showPaymentForm) {
        dispatch(setUserPaymentInfo(infoValues));
      }
      dispatch(setUserInvoiceInfo(infoValues));
      setShowPaymentForm(true);
      setGoToPayment(true);
    }
  };
  return (
    <>
      {!goToPayment ? (
        <>
          <h3 className="text-center text-lg">
            {showPaymentForm ? "פרטי תשום" : " פרטי חשבונית מס"}
          </h3>
          <InvoiceForm oneForm={!showPaymentForm} handleSubmit={handleSubmit} />
        </>
      ) : (
        <PaymentDialog isOpen={false} close={closeDialog} />
      )}
    </>
  );
};

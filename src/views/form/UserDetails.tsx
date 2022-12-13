import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InvoiceType } from "../../data/types";
import {
  setUserInvoiceInfo,
  setUserPaymentInfo,
  setCheckoutStep,
} from "../../redux/TopUpSlice";
import { FormMainContainer, InvoiceTitle } from "./form.styled";
import { InvoiceForm } from "./InvoiceForm";

export const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleSubmit = (values: InvoiceType) => {
    const infoValues = Object.entries(values).reduce(
      (acc, curr) =>
        curr.includes("oneForm") ? acc : { ...acc, [curr[0]]: curr[1] },
      {} as InvoiceType
    );
    if (values.oneForm) {
      dispatch(setUserInvoiceInfo(infoValues));
      dispatch(setUserPaymentInfo(infoValues));
      dispatch(setCheckoutStep(3));
    } else {
      if (showPaymentForm) {
        dispatch(setUserPaymentInfo(infoValues));
        dispatch(setCheckoutStep(3));
      }
      dispatch(setUserInvoiceInfo(infoValues));
      setShowPaymentForm(true);
    }
  };
  return (
    <div className=" flex flex-col self-center bg-white rounded p-4 w-full lg:w-3/4 overflow-auto mb-10 pb-8 relative">
      {showPaymentForm ? (
        <h3 className="text-center uppercase mb-8">
          Fill in the payment information details
        </h3>
      ) : (
        <h3 className="text-center uppercase mb-8">Fill in the Invoice Form</h3>
      )}
      <InvoiceForm oneForm={!showPaymentForm} handleSubmit={handleSubmit} />
    </div>
  );
};

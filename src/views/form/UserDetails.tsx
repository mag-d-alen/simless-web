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
    <FormMainContainer>
      {showPaymentForm ? (
        <InvoiceTitle>Fill in the payment information details</InvoiceTitle>
      ) : (
        <InvoiceTitle>Fill in the Invoice Form</InvoiceTitle>
      )}
      <InvoiceForm oneForm={!showPaymentForm} handleSubmit={handleSubmit} />
    </FormMainContainer>
  );
};

import React, { useState } from "react";
import { url } from "../../data/data";
import { ContactFormInputType } from "../../data/types";
import { usePostMessageMutation } from "../../redux/api/contactApi";
import { ContactForm } from "./ContactForm";

export const ContactMain = () => {
  const [status, setStatus] = useState<"submit" | "sending">("submit");
  const [postMessage] = usePostMessageMutation();

  const handleSubmit = async (values: ContactFormInputType) => {
    const { name, email, message, phone } = values;
     setStatus("sending");
    postMessage({ name, email, message, phone });
  };
  return <ContactForm handleSubmit={handleSubmit} status={status} />;
};

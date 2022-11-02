import axios from "axios";
import React, { useState } from "react";
import { url } from "../../data/data";
import { ContactFormInputType } from "../../data/types";
import { usePostMessageMutation } from "../../redux/api/contactApi";
import { ContactMainContainer } from "./contact.styled";
import { ContactForm } from "./ContactForm";

export const ContactMain = () => {
  const [status, setStatus] = useState<"Submit" | "Sending...">("Submit");
const [postMessage] = usePostMessageMutation();

  const handleSubmit = async (values: ContactFormInputType) => {
    const { name, email, message, phone} = values
    setStatus("Sending...");
    postMessage({ name, email, message, phone } )
  }
;

  return (
    <ContactMainContainer>
      <ContactForm handleSubmit={handleSubmit} status={status} />
    </ContactMainContainer>
  );
};

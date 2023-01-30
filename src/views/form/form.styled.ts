import styled from "styled-components";
import { Field, Formik } from "formik";

export const FormMainContainer = styled.div`
  display: flex;
  flex-direction: center;
  flex-direction: column;
  background: white;
  border-radius: 0.3rem;
  padding: 1rem;
  width: 100%;
`;

export const FormEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: smaller;
  align-items: center;
  width: 100%;
  background: white;
  padding: 1rem;
  position: relative;
  border-radius: 0.3rem;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 3rem;
  width: 100%;
`;
export const InputField = styled(Field)`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #edebfe;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem;
`;
export const FormFieldContainer = styled.div`
  display: flex;
  flex: 3;
`;

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
export const ErrorAlert = styled.div`
  background-color: white;
  color: red;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-size: 0.5rem;
  margin: -0.5rem 0.5rem 0.5rem 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  position: absolute;
  bottom: -0.5rem;
  right: 1rem;
`;
export const InvoiceTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;

export const FormStyledTextArea = styled.textarea`
  display: flex;
  text-overflow: clip;
  border-color: #a854f7;
  border-radius: 0.3rem;
  min-width: 80%;
  height: 5rem;
  overflow: auto;
  font-family: "Lato";
  :focus {
    border-color: #a854f7;
  }
`;

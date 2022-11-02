import styled from "styled-components";
import { Field, Formik } from "formik";

export const FormMainContainer = styled.div`
  display: flex;
  flex-direction: center;
  flex-direction: column;
`;

export const InputLabel = styled.div`
  display: flex;
  padding-left: 2rem;
  font-size: smaller;
  flex: 1;
  text-transform: uppercase;
  gap: 1rem;
`;
export const FormEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: smaller;
  align-items: center;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  gap: 3rem;
  width: 100%;
`;
export const InputField = styled(Field)`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: aliceblue;
  border: none;
  border-radius: 0.3rem;
  margin: 0.5rem;
  padding: 0.3rem;
`;
export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;
export const InvoiceTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;

export const FormStyledTextArea = styled.textarea`
  display: flex;
  text-overflow: clip;
  flex: 1;
  background-color: aliceblue;
  border: none;
  border-radius: 0.3rem;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 20rem;
  height: 5rem;
  overflow: auto;
  font-family: "Lato";
`;

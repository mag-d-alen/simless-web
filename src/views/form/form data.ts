import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const amountRegExp = /^[0-9]*$/;
const numsAndLettersRegExp = /^[aA-zZ0-9]+$/;
const letterOnlyRegExp = /^[a-zA-Z\s]*$/;
const dateRegExp = /^(0[1-9]|1[0-2])\/?([2-9]{2})$/;

export const initialData = {
  first_Name: "",
  last_Name: "",
  company: "",
  email: "",
  sim: "",
  phone: "",
  identity_No: "",
  // additional_Phone: "",
  // street: "",
  // city: "",
  // country: "",
  oneForm: true,
};
export const InvoiceSchema = Yup.object().shape({
  first_Name: Yup.string()
    .matches(letterOnlyRegExp, "enter correct name")
    .min(2, "Name is too short")
    .max(50, "Name is too Long"),

  last_Name: Yup.string()
    .matches(letterOnlyRegExp, "enter correct name")
    .min(2, "Name is too short")
    .max(50, "Name is too Long"),
  company: Yup.string()
    .min(2, "company's name is too short")
    .max(50, "Maximum length is 50 characters"),
  email: Yup.string().email("Enter correct email").required("Required"),
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .max(8, "Enter correct phone number"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .max(10, "Enter correct phone number"),
  identity_No: Yup.string()
    .matches(amountRegExp, "Identity number is not valid")
    .min(8, "Enter correct identity number")
    .max(10, "Enter correct identity number"),

  // additional_Phone: Yup.string()
  //   .matches(phoneRegExp, "Phone number is not valid")
  //   .min(6, "Enter correct phone number")
  //   .max(10, "Enter correct phone number"),
  // street: Yup.string()
  //   .min(5, "Enter corrrect street name")
  //   .matches(numsAndLettersRegExp, "Enter correct street name ")

  // city: Yup.string()
  //   .min(5, "Enter corrrect street name")
  //   .matches(numsAndLettersRegExp, "Enter correct city ")
  //   .required("Required"),
  // country: Yup.string().required("Required field"),
  oneForm: Yup.boolean(),
});

export const CheckBalanceSchema = Yup.object().shape({
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .required("Required"),
});
export const TopUpSchema = Yup.object().shape({
  sim: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Enter correct phone number")
    .required("Required"),
  amount: Yup.string()
    .matches(amountRegExp, "insert a value amount")
    .required("Required"),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(letterOnlyRegExp, "enter correct name")
    .min(2, "Name is too short")
    .max(50, "Name is too Long")
    .required("Required"),
  email: Yup.string().email("Enter correct email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(6, "Enter correct phone number")
    .max(10, "Enter correct phone number")
    .required("Required"),
  message: Yup.string().min(10, "Message is too short").required("Required"),
});
export const CardPaymentSchema = Yup.object().shape({
  card_Number: Yup.string()
    .min(16, "enter valid card number")
    .max(16, "enter valid card number")
    .matches(amountRegExp, "enter valid card number")
    .required("required"),
  expiry_Date: Yup.string()
    .required("Please enter the card Expiry Date")
    .matches(dateRegExp, "Please enter the card Expiry Date")
    .min(4, "Please enter the card Expiry Date")
    .max(4, "Please enter the card Expiry Date"),
  cvv: Yup.string()
    .matches(amountRegExp, "Invalid CVV format")
    .min(3)
    .max(3)
    .required("Required"),
});

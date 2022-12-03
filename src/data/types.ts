import { MultiValue } from "react-select";
export type InitialTopuUpState = {
  topUpSimNumber: string;
  invoice: InvoiceType | null;
  payment: InvoiceType | null;
  checkoutStep: number;
  topUpAmount: string;
  orderId: number;
  paymentSuccess: boolean | null;
};
export type InvoiceType = {
  first_Name?: string;
  last_Name?: string;
  company?: string;
  sim?: string;
  email: string;
  phone?: string;
  identity_No: string;
  // additionalPhone?: string;
  // street: string;
  // city: string;
  // country: string;
  oneForm?: boolean;
};
export type InitialChoosePackageType = {
  availablePackages?: any;
  loading?: boolean;
};
export type InitialContactStateType = {
  data: ContactFormInputType;
  loading?: boolean;
  error?: string;
};
export type InitialPackagesState = {
  chosenDeal: string[];
};
export type InitialSimActionsState = {
  simNumber: number | null;
  simStartDate: Date | null;
  selectedCountries?: SelectedCountriesType | [];
};
export type InitialUserInfoType = {
  userSimNumber: string;
  simData: SimDataType;
};
export type TopUpResponseType = {
  balance: number;
  amount: string;
  inum: string;
  onum: string;
  orderid: number;
};
export type SelectedCountryType = {
  label: string;
  value: string;
};
export type SelectedCountriesType = MultiValue<SelectedCountryType> | [];
export type AccordionItemType = { title: string; content: string }[];
export type AccordionContentType = {
  accordionContent: AccordionItemType;
  refs: any;
  currentAccordion: number;
  setCurrentAccordion: (current: number | null) => void;
  bodyHeight: number;
  setBodyHeight: (height: any) => void;
};
export type RatesService = {
  serviceid_name: string;
  serviceid: string;
  VAT_coefficient: string;
  GPRS_plan: any;
  SMS_plan: any;
  Voice_plan: any;
  VAS: any[];
}[];
export type SimDataType = {
  aserviceid: string;
  balance: string;
  blocked: boolean;
  curr: string;
  inum: string;
  onum: string;
  prepayed: boolean;
  tsimid: string;
};
export type ContactFormInputType = {
  name: string;
  email: string;
  message: string;
  phone: string;
};
export type CardPaymentResponseType = {
  data: any;
  loading: boolean;
  error?: string;
};
export type CardPaymentInputType = {
  name: string;
  amount: string;
  cardNumber: number;
  expiry_Date: string;
  cvv: number;
};

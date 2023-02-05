export const getHebrewVersion = (input: string) => {
  if (input === "email") return "אימייל";
  if (input === "name") return "שם";
  if (input === "sim") return "מספר הסים";
  if (input === "submit") return "שלח";
  if (input === "sending") return "...שולח";
  if (input === "phone") return "מספר הטלפון";
  if (input === "first_Name") return "שם פרטי";
  if (input === "last_Name") return "שם משפחה";
  if (input === "identity_No") return "מספר תעודת זהות";
  if (input === "company") return "שם החברה";
  else return "";
  // if (input === "email") return ""
  // if (input === "email") return ""
};

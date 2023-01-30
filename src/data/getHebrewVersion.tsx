export const getHebrewVersion = (input: string) => {
  if (input === "email") return "אימייל";
  if (input === "name") return "שם";
  if (input === "sim") return "מספר הסים";
  if (input === "submit") return "שלח";
  if (input === "sending") return "...שולח";
  if (input === "phone") return "מספר הטלפון";
  else return "";
  // if (input === "email") return ""
  // if (input === "email") return ""
};

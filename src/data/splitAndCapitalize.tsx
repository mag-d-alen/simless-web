export const splitAndCapitalize = (name: string) => {
  return name
    .toLocaleUpperCase()
    .split("_")
    .join(" ");
};

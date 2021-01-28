import downIcon from "../icons/down.svg";
import downLightIcon from "../icons/downLight.svg";

export const lightTheme = {
  body: " hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  input: " hsl(0, 0%, 52%)",
  card: "white",
  svg: "invert(0);",
  downIcon: `${downIcon}`,
};
export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  text: "#FAFAFA",
  card: "hsl(209, 23%, 22%)",
  svg: "invert(1);",
  downIcon: `${downLightIcon}`,
};

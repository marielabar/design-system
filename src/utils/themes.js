import { blue, neutral, purple, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[100],
  secondaryColor: purple[100],
  primaryColorHover: blue[200],
  primaryColorActive: blue[300],
  secondaryColorHover: purple[200],
  textColorOnPrimary: neutral[600],
  textColorInverted: neutral[100],
  mainBackground: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textOnmainBackground: neutral[400],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  }
}



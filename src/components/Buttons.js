import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => ` 
      font-size: ${typeScale.helperText};
      padding: 8px;
    `,
  large: () => `
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `,
  warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `
};

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    font-family: "IBM Plex Sans", sans-serif;
    cursor: pointer;
    min-width: 100px;
    transition: background-color 0.2s linear, color 0.2s linear;

`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;

    &:hover{
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorInverted};
    } 

    &: active {
        background-color: ${defaultTheme.primaryColorActive};
    }

    &: disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    &: focus {
        ouline: 3px solid ${defaultTheme.primaryColor};
        outline-offset: 3px;

    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

    
`;

export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.mainBackground};
    border: 4px solid ${defaultTheme.primaryColor};

    &:hover{
        background-color: ${defaultTheme.primaryColor};
    } 

    &: active {
        background-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColorInverted}
    }

    &: disabled {
        background-color:${defaultTheme.mainBackground};
        border: 4px solid ${defaultTheme.disabled};
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    &: focus {
        ouline: 3px solid ${defaultTheme.primaryColor};
        outline-offset: 3px;

    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

export const TertiaryButton = styled(Button)`
    background:none;
    color: ${defaultTheme.secondaryColor};
    border: none;
    text-decoration: underline;

    &:hover{
        color: ${defaultTheme.secondaryColorHover};
    } 

    &: active {
        color: ${defaultTheme.secondaryColorHover};
    }

    &: disabled {
        color: ${defaultTheme.disabled};
        cursor:not-allowed;
    }

    &: focus {
        ouline: 3px solid ${defaultTheme.secondaryColorHover};
        outline-offset: 3px;

    }

     ${applyStyleModifiers(BUTTON_MODIFIERS)}
    
`;



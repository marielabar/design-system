import React from "react";
import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { illustrations } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background-color: ${defaultTheme.mainBackground};
color: ${defaultTheme.textOnmainBackground};
display:flex;
flex-direction: column;
justify-content: center;
position: relative;
align-items: center;
`;

const ModalHeader = styled.h3`
font-size: ${typeScale.header3};
`;

const ModalParagraph = styled.p`
font-size: ${typeScale.paragraph};
max-width: 70%;
text-align: center;
`;

export const BasicModal = () => {
    return (
        <ModalWrapper>
            <img src={illustrations.SignUp} alt="Sign up for an account!" />
            <ModalHeader>Sign Up</ModalHeader>
            <ModalParagraph>
                Sign up today to get access to all of our content and features!
        </ModalParagraph>
            <PrimaryButton>
                Sign Up
        </PrimaryButton>
        </ModalWrapper>
    );
};
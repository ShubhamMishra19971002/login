import React from 'react';
import styled from 'styled-components';
import { Outline, Primary } from '../styles/helper';
import variables from '../styles/variables.module.scss';

const buttonStyles = () => `
    transition : all ${variables.duration};
    height: 40px;
`;
const primaryFilledStyles = (theme) => `
    background-color : ${theme.primaryBgColor};
    border : 1px solid ${theme.primaryBgColor};
    color : ${theme.primaryTextColor};
    &:hover, &:focus{
    background-color : ${theme.primaryBgColorHover};
    border : 1px solid ${theme.primaryBgColorHover};
`;
const primaryOutlineStyles = (theme) => `
    background-color : transparent;
    border : 1px solid ${theme.primaryBgColor};
    color : ${theme.primaryBgColor};
    &:hover, &:focus{
    color : ${theme.primaryTextColorHover};
    background-color : ${theme.primaryBgColorHover};
    border : 1px solid ${theme.primaryBgColorHover};
`;

const PrimaryButton = (theme) => `
  ${buttonStyles()}  
  ${primaryFilledStyles(theme)}
 
}`;

const outlineButton = (theme) => `
  ${buttonStyles()} 
  ${primaryOutlineStyles(theme)}
`;

const ButtonContainer = styled.button.attrs(({ btnTheme }) => {
  return {
    className: `btn ${btnTheme === Primary ? 'filled' : 'outline'}`,
  };
})`
  ${({ theme, btnTheme }) =>
    (btnTheme === Primary && PrimaryButton(theme)) ||
    (btnTheme === Outline && outlineButton(theme))}
`;

export function Button({ children, theme = Primary, ...rest }) {
  return (
    <>
      <ButtonContainer btnTheme={theme} {...rest}>
        {children}
      </ButtonContainer>
    </>
  );
}
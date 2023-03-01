import styled from 'styled-components';
import variables from '../styles/variables.module.scss';
import { Outline, Primary } from '../styles/helper';


const CardStyles = () => `
  width : 100%;
  padding : ${variables.size_xl};
  border-radius : ${variables.size};
  margin-bottom: ${variables.size_xl};
  &:last-child{
    margin-bottom: 0;
  }
  &.sm {
    padding : ${variables.size_sm};
    margin-bottom: ${variables.size_sm};
  }
  &.xs {
    padding : ${variables.size_xs};
    margin-bottom: ${variables.size_xs};
  }
  &.xl2 {
    padding : ${variables.size_2xl};
    margin-bottom: ${variables.size_2xl};
  }
  &.sm .card-header {
    margin:-${variables.size_sm};
    margin-bottom:${variables.size_sm};
    padding:${variables.size_sm};
  }
  &.sm .card-body {
    margin:-${variables.size_sm};
    padding:${variables.size_sm};
  }
  &.sm .card-footer {
    margin:-${variables.size_sm};
    margin-top:${variables.size_sm};
    padding:${variables.size_sm};
  }
  &.xs .card-header {
    margin:-${variables.size_xs};
    margin-bottom:${variables.size_xs};
    padding:${variables.size_xs};
  }
  &.xs .card-body {
    margin:-${variables.size_xs};
    padding:${variables.size_xs};
  }
  &.xs .card-footer {
    margin:-${variables.size_xs};
    margin-top:${variables.size_xs};
    padding:${variables.size_xs};
  }
  &.xl2 .card-header {
    margin:-${variables.size_2xl};
    margin-bottom:${variables.size_2xl};
    padding:${variables.size_2xl};
  }
  &.xl2 .card-body {
    margin:-${variables.size_2xl};
    padding:${variables.size_2xl};
  }
  &.xl2 .card-footer {
    margin:-${variables.size_2xl};
    margin-top:${variables.size_2xl};
    padding:${variables.size_2xl};
  }
`;
const primaryFilledStyles = (theme) => `
    background-color : ${theme.primaryBgColor};
    border : 1px solid ${theme.border};
    color : ${theme.primaryTextColor};
`;
const primaryOutlineStyles = (theme) => `
    background-color : transparent;
    border : 1px solid ${theme.border};
    color : ${theme.primaryBgColor};
`;

const PrimaryCard = (theme) => `
  ${CardStyles()}  
  ${primaryFilledStyles(theme)}
 
}`;

const outlineCard = (theme) => `
  ${CardStyles()} 
  ${primaryOutlineStyles(theme)}
`;

const Card = styled.div.attrs(({ cardTheme }) => {
  return {
    className: `card ${cardTheme === Primary ? 'filled' : 'outline'}`,
  };
})`
  ${({ theme, cardTheme }) =>
    (cardTheme === Primary && PrimaryCard(theme)) ||
    (cardTheme === Outline && outlineCard(theme))}
`;

export const CardHeader = styled.div.attrs(() => {
  return {
    className: 'card-header',
  };
})`
  border-bottom: 1px solid ${variables.border};
  margin-left: -${variables.size_xl};
  margin-right: -${variables.size_xl};
  margin-top: -${variables.size_xl};
  margin-bottom: ${variables.size_xl};
  padding: ${variables.size} ${variables.size_xl};
`;

export const CardFooter = styled.div.attrs(() => {
  return {
    className: 'card-footer',
  };
})`
  border-top: 1px solid ${variables.border};
  padding: ${variables.size} ${variables.size_0};
  margin-left: -${variables.size_xl};
  margin-right: -${variables.size_xl};
  margin-bottom: -${variables.size_xl};
  margin-top: ${variables.size_xl};
  padding: ${variables.size} ${variables.size_xl};
`;

export const CardBody = styled.div.attrs(() => {
  return {
    className: 'card-body',
  };
})`
  padding: ${variables.size_xl};
  margin-left: -${variables.size_xl};
  margin-right: -${variables.size_xl};
  margin-top: -${variables.size_xl};
  margin-bottom: -${variables.size_xl};
`;

export function CardContainer({ children, theme = Primary, ...rest }) {
  return (
    <>
      <Card cardTheme={theme} {...rest}>
        {children}
      </Card>
    </>
  );
}

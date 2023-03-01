import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const Col = styled.div.attrs(({ sm = 'auto', md = 'auto' }) => {
  return {
    className: `col-${sm} col-md-${md}`,
  };
})``;

// export const LinkButton = styled.button.attrs(() => {
//   return { className: '' };
// })`
//   padding: 8px 16px;
//   transition: all 0.5s ease-in-out;
//   text-decoration: none;
//   cursor: pointer;
//   display: inline-block;
//   color: ${({ theme }) => theme.primaryTextColor};
//   &:hover {
//     color: ${({ theme }) => theme.primaryTextColorHover};
//   }
// `;

export const Label = styled.label.attrs(() => {
  return {
    className: '',
  };
})``;

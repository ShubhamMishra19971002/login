import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.module.scss';
import logoSymbol from '../../images/logo_ma_symbol.svg';

const NavigationBar = styled.div.attrs(() => {
  return {
    className: 'd-flex px-6 items-center sticky-header',
  };
})`
  height: 64px;
  color: ${({ theme }) => theme.primaryTextColor};
  & > img{
    width: 30px;
    margin: auto;
  }
`;

const ActionButton = styled.div.attrs(({ state }) => {
  return {
    className: `${state ? 'd-inline' : 'd-none'}`,
  };
})``;

const TitleBar = styled.div.attrs(() => {
  return {
    className: 'flex-1',
  };
})`
  padding-left: ${variables.size};
  & h2 {
    font-weight:400;
    font-size: ${variables.size_lg};
  }  
`;

const TitleLayout = (props, ...rest) => {
  return (
    <TitleBar {...rest}>
      <h2 style={{ fontSize: variables.size, marginBottom: 0 }}>
        {props?.title && props.title}
        {props?.subtitle && <span style={{fontWeight: variables.fw_sb}} className="d-block">{props.subtitle}</span>}
      </h2>
      {props?.children}
    </TitleBar>
  );
};
const Avatar = styled.div.attrs(() => {})`
  & button {    
    background:rgba(255,255,255,18%);
    width:40px;
    height:40px;
    & svg {
      margin: auto!important;
    }
  }
`;

const Header = (props) => {
  const history = useHistory();
  const path = history.location.pathname;
  return (
    <NavigationBar>
      <img src={logoSymbol} />
      {path === '/eligibility-with-package' || path === '/eligibility-without-package' ? (
        <TitleLayout title={'Know'} subtitle={'Your treatment eligibilty'} />
      ) : (
      <TitleLayout title={props.name +"'s"} subtitle={props.subtitle} />
      )}
    </NavigationBar>
  );
};

export default Header;

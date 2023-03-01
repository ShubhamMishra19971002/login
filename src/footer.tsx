import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IHelp, IHospital, IClaims, INotification, Notification } from '../styles/icons/icons';
import variables from '../styles/variables.module.scss';

const FooterBg = styled.div.attrs(() => {
  return {
    className: 'd-flex items-center',
  };
})`
  position: fixed;
  bottom: ${variables.size_0};
  left: ${variables.size_0};
  width: 100%;
  height: 64px;
  padding: ${variables.size_mdl} ${variables.size_2xl};
  color: ${({ theme }) => theme.primaryTextColor};
  z-index: 1000;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    background: ${variables.active_light};
    height: 64px;
    z-index: -1;
    opacity: 0.3;
    left: 0;
  }
`;

const Navigation = styled.div.attrs(({ state }) => {
  return {
    className: 'd-flex items-center justify-between',
  };
})`
  background: ${variables.primaryTextColor};
  padding: ${variables.size_xs} ${variables.size_2xl};
  border-radius: ${variables.size_4xl};
  cursor: pointer;
  width: 100%;
`;

const FooterMenu = styled.div.attrs(() => {})`
  & .icon-notification {
    width: 20px;
    height: 20px;
  }
  & svg {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin: auto !important;
  }
  & p {
    font-size: ${variables.size_sm};
    color: ${variables.primaryBgColor};
    font-weight: ${variables.fw_sb};
  }
`;

const Active = styled.div.attrs(() => {})`
  position: relative;
  margin-bottom: ${variables.size_md};
  &::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    background-color: ${variables.primaryBgColor};
    left: 40%;
    top: 0;
    right: 0;
    border-radius: 50%;
  }
`;

const Footer = (props) => {
  const history = useHistory();
  const claimClick = () => history.push('./Claim');
  const handleClick = () => history.push('./Hospitals');
  const helpClick = () => history.push('./Help');

  return (
    <FooterBg>
      <Navigation state={true}>
        <FooterMenu onClick={claimClick}>
          <IClaims />
        </FooterMenu>
        <FooterMenu onClick={helpClick}>
          <IHelp />
        </FooterMenu>
        <FooterMenu onClick={handleClick}>
          <IHospital />
          {/* <p className='mb-0'>Hospitals</p>
            <Active/> */}
        </FooterMenu>
        <FooterMenu>
          <INotification />
        </FooterMenu>
      </Navigation>
    </FooterBg>
  );
};

export default Footer;

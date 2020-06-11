import React from 'react';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
      <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 2H37.5M0 13.04H37.5M10.5 25H37.5" stroke="white" stroke-width="3"/>
      </svg>

    </HeaderWrapper>
  );
}

export default Header;
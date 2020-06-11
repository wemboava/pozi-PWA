import React from 'react';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <img src="/static/images/logo.png" />
        <span>POZI</span>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
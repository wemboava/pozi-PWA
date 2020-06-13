import React from 'react';
import { useRouter } from 'next/router'

import { MenuWrapper, MenuContent } from './styles';

const Menu = ({ isOpened, handleClose }) => {
  const router = useRouter()

  return (
    <MenuWrapper onClick={handleClose} isOpened={isOpened}>
      <MenuContent isOpened={isOpened}>
        <div className="menu-header">
          <svg onClick={handleClose} width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L30 29M2 29L30 2" stroke="black" strokeWidth="3"/>
          </svg>
        </div>
        <button onClick={() => {router.push('/login')}}>Login</button>
      </MenuContent>
    </MenuWrapper>
  );
}

export default Menu;
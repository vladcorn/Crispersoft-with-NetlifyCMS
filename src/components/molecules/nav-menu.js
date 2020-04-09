import React from 'react';
import { Link } from 'gatsby';
import { HamburgerMenu } from '@ui/atoms';

const NavMenu = ({ handleActiveMenu, active }) => {
  return (
    <div className='main-menu'>
      {/* <Switcher /> */}
      <div className='actions'>
        <Link
          to='/contacts/'
          className='btn btn-contacts'
          activeStyle={{ display: 'none' }}
        >
          Contact us
        </Link>
      </div>
      <HamburgerMenu active={active} onClick={handleActiveMenu} label='Menu' />
    </div>
  );
};

export default NavMenu;

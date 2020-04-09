import React from 'react';
import { Link } from 'gatsby';

import { NavMenu, Logo } from '@ui/molecules';
import { NavSideMenu } from '@ui/organisms';

import { useScrollingHeader } from '../hooks';

const Header = ({ siteTitle }) => {
  const [activeMenu, setActiveMenu] = React.useState(false);

  const ref = useScrollingHeader();

  const handleActiveMenu = React.useCallback(() => {
    setActiveMenu((active) => !active);
  }, [setActiveMenu]);

  React.useEffect(() => {
    const body = document.querySelector('body');

    if (activeMenu) {
      body.classList.add('locked');
    } else {
      body.classList.remove('locked');
    }
  }, [activeMenu]);

  return (
    <header className='section header' id='header' ref={ref}>
      <div className='section-body fixed'>
        <Link to='/' aria-label='Go to main page'>
          <Logo />
        </Link>
        <NavMenu active={activeMenu} handleActiveMenu={handleActiveMenu} />
      </div>
      <NavSideMenu active={activeMenu} />
    </header>
  );
};

export default Header;

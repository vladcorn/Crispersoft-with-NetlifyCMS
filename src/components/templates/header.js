import React from 'react';
import { Link } from 'gatsby';

import { Section } from '@ui/atoms';
import { Logo, NavMenu } from '@ui/molecules';
import { NavSideMenu } from '@ui/organisms';

import { useScrollingHeader } from '../../hooks';

import { styleFixed } from '@styles/helpers';
import { styleHeader, StyledHeaderContent } from '@styles/header';

const Header = ({ logo, menu, style, children }) => {
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
    <Section as='header' className={styleHeader}>
      <Section.Body className={styleFixed}>
        <StyledHeaderContent ref={ref}>
          <Link to='/' aria-label='Go to main page'>
            <Logo />
          </Link>
          <NavMenu active={activeMenu} handleActiveMenu={handleActiveMenu} />
        </StyledHeaderContent>
      </Section.Body>
      <NavSideMenu active={activeMenu} />
    </Section>
  );
};

export default Header;

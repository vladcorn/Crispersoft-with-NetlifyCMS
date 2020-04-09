import React from 'react';
import { cx } from 'linaria';

import Root from '@ui/root';

import { Preloader } from '@ui/organisms';
import { Main, Footer } from '@ui/templates';
// import { Header } from '@ui/templates';
import Header from '@ui/header';

import useTheme from '@hooks/useTheme';

import { StyledLayoutContainer } from '@styles/layout';
import { globalStyles } from '@styles/globals';

import '../../styles/index.scss';
// import UserlikeWidget from '../../widgets/userlike-widget';

const Layout = ({ page, children }) => {
  const { theme } = useTheme();

  return (
    <Root>
      <StyledLayoutContainer
        data-page={page}
        className={cx(globalStyles, theme)}
      >
        <Preloader />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </StyledLayoutContainer>
      {/* <UserlikeWidget /> */}
    </Root>
  );
};

export default Layout;

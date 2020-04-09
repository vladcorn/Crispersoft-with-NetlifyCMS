import React from 'react';
import { Link } from 'gatsby';

import { StyledFooterContent } from '@styles/footer';
import { styleFixed } from '@styles/helpers';

import { Section } from '@ui/atoms';
import { Logo, SocialList } from '@ui/molecules';

const Footer = () => {
  return (
    <Section as='footer'>
      <Section.Body className={styleFixed}>
        <StyledFooterContent>
          <Link to='/' aria-label='Go to main page'>
            <Logo />
          </Link>
          <SocialList />
        </StyledFooterContent>
      </Section.Body>
    </Section>
  );
};

export default Footer;

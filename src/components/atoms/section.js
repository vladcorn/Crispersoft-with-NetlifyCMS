import React from 'react';

import {
  StyledSection,
  StyledSectionBackground,
  StyledSectionBody,
  StyledSectionHeader,
  StyledSectionFooter,
} from '@styles/section';

const Header = ({ className, children }) => {
  return (
    <StyledSectionHeader className={className}>{children}</StyledSectionHeader>
  );
};

const Body = ({ className, children, fixed }) => {
  return (
    <StyledSectionBody className={className} fixed={fixed}>
      {children}
    </StyledSectionBody>
  );
};

const Footer = ({ className, children }) => {
  return (
    <StyledSectionFooter className={className}>{children}</StyledSectionFooter>
  );
};

const Background = ({ className, children }) => {
  return (
    <StyledSectionBackground className={className}>
      {children}
    </StyledSectionBackground>
  );
};

const Section = ({ as = 'section', className, children }) => {
  return (
    <StyledSection as={as} className={className}>
      {children}
    </StyledSection>
  );
};

Section.Body = Body;
Section.Header = Header;
Section.Footer = Footer;
Section.Background = Background;

export default Section;

import React from 'react';
import { ReactComponent as LogoSvg } from '@images/icons/logo.svg';
import { StyledContainer, StyledLogoName } from '@styles/logo';
import { Icon } from '@ui/atoms';

const Logo = ({ name }) => {
  return (
    <StyledContainer>
      <Icon>
        <LogoSvg />
      </Icon>
      <StyledLogoName>{name}</StyledLogoName>
    </StyledContainer>
  );
};

export default Logo;

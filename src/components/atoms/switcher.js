import React from 'react';
import Switch from 'react-switch';
import { StyledSwitcherWrapper } from '@styles/switcher';
// import useTheme from '@hooks/useTheme';

const Switcher = () => {
  // const data = useTheme();

  // console.log(data);

  return (
    <StyledSwitcherWrapper>
      <Switch onChange={() => {}} checked={!false} />
    </StyledSwitcherWrapper>
  );
};

export default Switcher;

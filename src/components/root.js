import React from 'react';
import { BreakpointProvider } from 'react-socks';
import { ThemeProvider } from '@contexts/theme-context';

const Root = ({ children }) => {
  return (
    <BreakpointProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </BreakpointProvider>
  );
};

export default Root;

import React from 'react';
import { ThemeContext } from '@contexts/theme-context';
import { themes } from '@styles/themes';

export default () => {
  const data = React.useContext(ThemeContext);
  // console.log('Data', data);

  //   const isLightTheme = theme === themes.light;

  //   const toggleTheme = React.useCallback(
  //     () => setTheme((t) => (t === themes.light ? themes.dark : themes.light)),
  //     [setTheme]
  //   );

  return {
    theme: themes.light,
    isLightTheme: true,
    toggleTheme: () => {},
    data,
  };
};

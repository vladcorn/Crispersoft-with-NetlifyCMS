import React from 'react';
import cn from 'classnames';

const HamburgerMenu = ({ active, onClick, label }) => {
  const classes = cn('hamburger hamburger--collapse', {
    active,
  });

  return (
    <button className={classes} type='button' onClick={onClick} title='Menu'>
      <span className='hamburger-label'>{label}</span>
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default HamburgerMenu;

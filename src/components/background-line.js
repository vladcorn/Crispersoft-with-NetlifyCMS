import React from 'react';
import cn from 'classnames';

const BackgroundLine = ({ type, positionX = '100%', positionY = '100%' }) => {
  const classes = cn('background-line', {
    [type]: type,
  });

  return (
    <div
      className={classes}
      style={{ backgroundPositionX: positionX, backgroundPositionY: positionY }}
    />
  );
};

export default BackgroundLine;

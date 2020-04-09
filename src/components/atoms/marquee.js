import React from 'react';
import cn from 'classnames';

const Marquee = ({ list, direction }) => {
  const classes = cn('marquee', {
    [direction]: direction,
  });

  const marqueeStr = ` - ${[...list, ...list].join(' - ')}`;

  return (
    <div className={classes}>
      <div className='title text-stroke'>{marqueeStr}</div>
    </div>
  );
};

export default Marquee;

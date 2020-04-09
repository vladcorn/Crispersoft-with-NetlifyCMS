import React from 'react';

const SliderProgress = ({ value, length }) => {
  return (
    <div className='slick-progress'>
      <progress className='progress' value={value} max={length}></progress>
    </div>
  );
};

export default SliderProgress;

import React from 'react';
import SliderPortfolio from './slider-portfolio';
import cn from 'classnames';

const SectionMainPortfolio = ({ page }) => {
  const className = cn('title title-section', {
    'main-title': page === 'portfolio',
  });

  const header = React.createElement(
    page === 'portfolio' ? 'h1' : 'h2',
    {
      className,
    },
    'Portfolio'
  );

  return (
    <section className='section portfolio-section padding-vertical'>
      <div className='section-body fixed'>
        {header}
        <SliderPortfolio page={page} />
      </div>
    </section>
  );
};

export default SectionMainPortfolio;

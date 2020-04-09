import React from 'react';
import StatueImage from '@images/greek-statue-xl.png';
import { Link } from 'gatsby';
import BackgroundLine from './background-line';

const SectionNotFound = () => {
  return (
    <section className='section center only middle padding-vertical not-found-section'>
      <BackgroundLine type='left-1' positionY='50%' />
      <div className='section-body fixed'>
        <div className='image-wrapper statue'>
          <img src={StatueImage} alt='statue' />
          <div className='circle'></div>
        </div>
        <h2 className='title'>
          Page not <span className='text-stroke'>found</span>
        </h2>
        <p className='text text-description'>
          WE DONâ€™T KNOW HOW DID YOU GET HERE...
          <span>Get back to the home page.</span>
        </p>
        <Link to='/' className='btn btn-circle btn-circle-small'>
          <span>Back</span>
        </Link>
      </div>
    </section>
  );
};

export default SectionNotFound;

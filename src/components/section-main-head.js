import React from 'react';
import { Link } from 'gatsby';
import BackgroundLine from './background-line';

const SectionMainHead = () => {
  return (
    <section className='section head-section first padding-vertical'>
      <BackgroundLine type='left-1' positionY='4%' />
      <div className='section-body fixed'>
        <div className='info head-info'>
          <h1>
            <div className='title-wrapper'>
              <div className='title main-title d-block'>WEB SOLUTIONS</div>
            </div>
            <div className='title-wrapper'>
              <div className='title main-title d-block'>DEVELOPMENT</div>
            </div>
            <div className='title-wrapper'>
              <div className='title main-title d-block'>
                and <span className='text-stroke'>PROMOTION</span>
              </div>
            </div>
          </h1>
          <p className='text text-description'>
            CrisperSoft came to this world to help you out with establishing
            your business online. You are standing in the front door of not just
            another web and mobile development company. We DO care about your
            business
          </p>
          <div className='link-wrapper'>
            <span className='link-line'></span>
            <Link className='link uppercase' to='/portfolio/'>
              Show&nbsp;projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMainHead;

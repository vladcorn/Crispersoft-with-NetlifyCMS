import React from 'react';
import BackgroundLine from './background-line';

const SectionMilestones = () => {
  return (
    <section className='section milestones-section padding-vertical'>
      <BackgroundLine type='down-2' positionY='2%' />
      <div className='section-body fixed'>
        <h2 className='title vertical-padding'>
          <span className='text-stroke'>Our</span> milestones
        </h2>
        <ul className='list list-milestones'>
          <li className='milestone-row milestone-row-1'>
            <div className='milestone-content'>
              <div className='milestone-count'>
                <span className='text-stroke'>100</span>
              </div>
              <div className='milestone-description'>
                <span>Successfully delivered</span>
                <span>projects</span>
              </div>
            </div>
          </li>
          <li className='milestone-row milestone-row-2'>
            <div className='milestone-content'>
              <div className='milestone-count'>
                <span className='text-stroke'>7</span>
              </div>
              <div className='milestone-description'>
                <span>enterprise</span>
                <span>partners</span>
              </div>
            </div>
          </li>
          <li className='milestone-row milestone-row-3'>
            <div className='milestone-content'>
              <div className='milestone-count'>
                <span className='text-stroke'>40k</span>
              </div>
              <div className='milestone-description'>
                <span>billed</span>
                <span>hours</span>
              </div>
            </div>
          </li>
          <li className='milestone-row milestone-row-4'>
            <div className='milestone-content'>
              <div className='milestone-count'>
                <span className='text-stroke'>9</span>
              </div>
              <div className='milestone-description'>
                <span>years of proven</span>
                <span>experience</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionMilestones;

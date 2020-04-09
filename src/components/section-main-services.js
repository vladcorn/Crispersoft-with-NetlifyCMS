import React from 'react';

const SectionMainServices = () => {
  return (
    <section className='section services-section padding-vertical'>
      <div className='section-body fixed'>
        <h2 className='title'>
          <span className='text-stroke'>Our</span> services
        </h2>
        <ul className='list services'>
          <li className='secondary-title service'>
            <h3 className='service-title'>Development</h3>
            <ul className='list service-list'>
              <li className='service-item text'>
                FRONT AND BACKEND WEB DEVELOPMENT
              </li>
              <li className='service-item text'>
                IOS (IPHONE & IPAD) DEVELOPMENT
              </li>
              <li className='service-item text'>API INTEGRATIONS</li>
            </ul>
          </li>
          <li className='secondary-title service'>
            <h3 className='service-title'>Promotion</h3>
            <ul className='list service-list'>
              <li className='service-item text'>BUSINESS ANALYSIS</li>
              <li className='service-item text'>MARKETING DEVELOPMENT</li>
              <li className='service-item text'>SMM</li>
            </ul>
          </li>
          <li className='secondary-title service'>
            <h3 className='service-title'>Design</h3>
            <ul className='list service-list'>
              <li className='service-item text'>UI/UX DESIGN</li>
              <li className='service-item text'>GRAPHIC DESIGN</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionMainServices;

import React from 'react';
import BackgroundLine from './background-line';
// import { useSpring, animated } from 'react-spring';
// import { useWindowSize } from '../hooks';

const SectionSeo = () => {
  // const textRef = React.useRef(null);
  // const [hide, setHide] = React.useState(true);

  // const props = useSpring({
  //   maxHeight: hide ? '0px' : '1200px',
  //   config: { duration: 400 },
  // });

  // const toggleHide = () => {
  //   setHide((hide) => !hide);
  // };

  return (
    <section className='section seo-section padding-vertical'>
      <BackgroundLine type='left-1' positionY='0%' />
      <div className='section-body fixed'>
        <h2 className='title'>CrisperSoft</h2>
        <p className={`text text-description`}>
          <span>
            Web and mobile development is the main course of CrisperSoft. We are
            situated in Kharkiv, Ukraine and providing customers with our
            services all around the globe. Since 2010 we offering a wide spectre
            of IT services from simple landing page creation to developing
            complex AI solutions. Putting high efforts in developing web
            applications with high-quality UI and UX, agile project management,
            robust back-end and front-end coding, and precise QA for our
            customers makes our web development company one of the most
            customer-friendly one.
          </span>
          {/* <animated.span
            style={props}
            ref={textRef}
            className='text-expansion'
          ></animated.span> */}
        </p>
        {/* <div className='link-wrapper'>
          <span className='link-line'></span>
          <a
            className='link uppercase'
            tabIndex='0'
            role='button'
            onClick={toggleHide}
          >
            Show&nbsp;more
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default SectionSeo;

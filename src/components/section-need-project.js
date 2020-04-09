import React from 'react';
import { Link } from 'gatsby';
const SectionNeedProject = () => {
  return (
    <section className='section need-project-section padding-vertical'>
      <div className='section-body fixed'>
        <h2 className='title'>
          <span className='text-stroke'>PSST!</span> Need a project?
        </h2>
        <p className='text text-description'>
          We all know why are you here. You need a project but you still not
          sure that we are not capable to handle all of your requirements? Take
          that! Hit the button and check our awesome portfolio
        </p>
        <Link
          to='/contacts/'
          className='btn btn-circle btn-circle-small'
          aria-label='Go to contacts page'
        >
          <span>contact us</span>
        </Link>
      </div>
    </section>
  );
};

export default SectionNeedProject;

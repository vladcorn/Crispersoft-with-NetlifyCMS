import React from 'react';
import { Link } from 'gatsby';

const SectionAboutAsk = () => {
  return (
    <section className='section need-project-section about-ask-section padding-vertical'>
      <div className='section-body fixed'>
        <h2 className='title'>
          Why so <span className='text-stroke'>serious?</span>
        </h2>
        <p className='text text-description'>
          Have an Idea - bring it to the world! Have concerns about it’s
          value? Ask us! It’s absolutely free! Get a free consultation with
          our Business Analyst and let your dreams come true.
        </p>
        <Link to='/contacts/' className='btn btn-circle btn-circle-small'>
          <span>Ask us</span>
        </Link>
      </div>
    </section>
  );
};

export default SectionAboutAsk;

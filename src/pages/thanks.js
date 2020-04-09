import React from 'react';
import { Layout } from '@ui/templates';
import { Link } from 'gatsby';
import BackgroundLine from '../components/background-line';

const ThanksPage = () => {
  return (
    <Layout page='thanks'>
      <section className='section center only middle padding-vertical thanks-section'>
        <BackgroundLine type='right-up' positionY='100%' />
        <div className='section-body fixed'>
          <h2 className='title'>
            Thank&nbsp;<span className='text-stroke'>you</span>
          </h2>
          <p className='text text-description'>
            We will contact you ASAP.
            <span> Stay up, Stay happy, Stay online!</span>
          </p>
          <Link to='/' className='btn btn-circle btn-circle-small'>
            <span>Back</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ThanksPage;

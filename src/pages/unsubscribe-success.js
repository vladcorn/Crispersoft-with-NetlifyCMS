import React from 'react';
import { Layout } from '@ui/templates';
import { Link } from 'gatsby';
import BackgroundLine from '../components/background-line';

const UnsubscribeSuccessPage = () => {
  return (
    <Layout page='thanks'>
      <section className='section center only middle padding-vertical thanks-section'>
        <BackgroundLine type='right-up' positionY='100%' />
        <div className='section-body fixed'>
          <h2 className='title'>Unsubscribe</h2>
          <p className='text text-description'>
            You have been successfully unsubscribed.
            <span>
              You will no longer receive this type of e-mails from us. We are
              very sorry that you left us. If you unsubscribed by mistake,
              please contact us.
            </span>
          </p>
          <Link to='/' className='btn btn-circle btn-circle-small'>
            <span>Home</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default UnsubscribeSuccessPage;

import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import PaginationSimple from '../../components/pagination-simple';

import { ReactComponent as WadachLogoSvg } from '@images/dawid-wadach/dawidWadach-logo.svg';
import Wadach1Image from '@images/dawid-wadach/dawidWadach-1-xl.jpg';
import Wadach2Image from '@images/dawid-wadach/dawidWadach-2-xl.jpg';
import { SeoBlock } from '@ui/atoms';

const DawidWadachPage = ({ data }) => {
  const {
    dawidWadach: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='dawid-wadach'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section fixed first project-background-section project-head-section'>
        <div className='project-head'>
          <div className='project-logo'>
            <WadachLogoSvg />
          </div>
          <h1 className='title main-title project-title'>
            Dawid<span className='text-stroke'>Wadach</span>
          </h1>
        </div>
      </section>
      <section className='section fixed center project-description-section'>
        <div className='section-header'></div>
        <div className='section-body'>
          <h2 className='title'>
            The high-tech, modern, credible expert site which suggests service
            of graphic
            <span className='text-stroke'> design</span>
          </h2>
          <div className='link-wrapper'>
            <a className='link' href='https://wadach.com/' rel='nofollow'>
              wadach.com/
            </a>
          </div>
          <p className='text'>
            Before we set to work on the business card site for a graphic
            designer, our client shared his vision to start from the idea that
            the entire resource should reflect the basic information the
            designers professional skills.
          </p>
          <p className='text'>
            As a result, the site was created without overloading with extra
            information, on which there are three sections in the cellar. The
            visitor has the opportunity to view the designer's portfolio, get
            acquainted with information about him, as well as info to contact
            him.
          </p>
          <p className='text'>
            Reload Frame means that we're not having to reload an entire web
            page to check code etc - reloading the whole page generally chucks
            you back to the first menu in the Squarespace backend and you have
            to navigate back to the page you're working on which takes approx 10
            seconds (super annoying).
          </p>
          <img className='project-img' src={Wadach1Image} alt='dawidWadach 1' />
        </div>
        <div className='section-footer'></div>
      </section>
      <section className='section fixed center project-background-section divider-section'></section>
      <section className='section fixed center project-description-section'>
        <div className='section-header'></div>
        <div className='section-body'>
          <img className='project-img' src={Wadach2Image} alt='dawidWadach 2' />
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/portfolio/whitefrontier-brewery/'
            nextLink='/portfolio/house-of-borel/'
          />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        dawidWadach {
          title
          description
          link {
            name
            href
          }
        }
      }
    }
  }
`;

export default DawidWadachPage;

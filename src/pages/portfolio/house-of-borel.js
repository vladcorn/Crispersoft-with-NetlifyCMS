import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import PaginationSimple from '../../components/pagination-simple';

import { ReactComponent as HouseOfBorelLogoSVG } from '@images/house-of-borel/houseOfBorel-logo.svg';
import HouseOfBorel1Image from '@images/house-of-borel/houseOfBorel-1-xl.jpg';
import HouseOfBorel2Image from '@images/house-of-borel/houseOfBorel-2-xl.jpg';
import HouseOfBorel3Image from '@images/house-of-borel/houseOfBorel-3-xl.jpg';
import HouseOfBorel4Image from '@images/house-of-borel/houseOfBorel-4-xl.jpg';
import HouseOfBorel5Image from '@images/house-of-borel/houseOfBorel-5-xl.jpg';
import { SeoBlock } from '@ui/atoms';

const HouseOfBorelPage = ({ data }) => {
  const {
    houseOfBorel: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='house-of-borel'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section fixed first project-background-section project-head-section'>
        <div className='project-head'>
          <div className='project-logo'>
            <HouseOfBorelLogoSVG />
          </div>
          <h1 className='title main-title project-title'>
            House of<span className='text-stroke'>borel</span>
          </h1>
        </div>
      </section>
      <section className='section fixed center project-description-section'>
        <div className='section-header'></div>
        <div className='section-body'>
          <h2 className='title'>
            The elegant website which conceptualizes, develop, and design pieces
            to
            <span className='text-stroke'> perfection</span>
          </h2>
          <div className='link-wrapper'>
            <a className='link' href='http://houseofborel.com/' rel='nofollow'>
              houseofborel.com/
            </a>
          </div>
          <p className='text'>
            The best craftsmen in the manual production of leather bags asked to
            develop a site that corresponds to the concept of excellence.
          </p>
          <p className='text'>
            "Perfection in every seam" - this is the slogan of House of Borel
            and our task was to embody this slogan in the website.
          </p>
          <p className='text'>
            We believe when it comes to perfection - words are unnecessary.
          </p>
          <p className='text'>Just follow and experience perfection.</p>
          <ul className='list gallery'>
            <li className='gallery-item gallery-item-1'>
              <img src={HouseOfBorel1Image} alt='house of borel 1' />
            </li>
            <li className='gallery-item'>
              <ul className='list gallery-row'>
                <li className='gallery-item-2'>
                  <img src={HouseOfBorel2Image} alt='house of borel 2' />
                </li>
                <li className='gallery-item-3'>
                  <img src={HouseOfBorel3Image} alt='house of borel 3' />
                </li>
              </ul>
            </li>
            <li className='gallery-item gallery-item-4'>
              <img src={HouseOfBorel4Image} alt='house of borel 4' />
            </li>
            <li className='gallery-item gallery-item-5'>
              <img src={HouseOfBorel5Image} alt='house of borel 5' />
            </li>
          </ul>
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/portfolio/dawid-wadach/'
            nextLink='/portfolio/likimap/'
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
        houseOfBorel {
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

export default HouseOfBorelPage;

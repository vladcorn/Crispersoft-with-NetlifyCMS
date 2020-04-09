import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';
import PaginationSimple from '../../components/pagination-simple';

import { ReactComponent as LikimapLogoSvg } from '@images/likimap/likimap-logo.svg';
import Likimap1Image from '@images/likimap/likimap-1.jpg';
import Likimap2Image from '@images/likimap/likimap-2.jpg';
import Likimap3Image from '@images/likimap/likimap-list-1.jpg';
import Likimap4Image from '@images/likimap/likimap-list-2.jpg';
import Likimap5Image from '@images/likimap/likimap-list-3.jpg';
import Likimap6Image from '@images/likimap/likimap-list-4.jpg';
import { SeoBlock } from '@ui/atoms';
// import BackgroundImage from '../../components/atoms/background-image';

const LikimapPage = ({ data }) => {
  const {
    likimap: { description, title, link, author },
  } = data.site.siteMetadata;
  // const { bgImage1 } = data;
  return (
    <Layout page='likimap'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section first project-background-section project-head-section'>
        {/* <BackgroundImage imageFluid={bgImage1.childImageSharp.fluid} /> */}
        <div className='section-body fixed'>
          <div className='project-head'>
            <div className='project-logo'>
              <LikimapLogoSvg />
            </div>
            <h1 className='title main-title project-title'>Likimap</h1>
          </div>
        </div>
      </section>
      <section className='section fixed center project-description-section'>
        <div className='section-body'>
          <h2 className='title'>
            Convenient mass area for the sale and rental of real estate.
            Mobility and amazing search speed - these features are the Likimap
            essence.
            <span className='text-stroke'> design</span>
          </h2>
          <div className='link-wrapper'>
            <a
              className='link'
              href='https://likimap.ua'
              rel='nofollow'
            >
                likimap.ua
            </a>
          </div>
          <p className='text'>
            For our Ukrainian client, we implemented the Likimap portal - a web
            application with thousands of current free ads for the sale,
            purchase and rental of real estate.
          </p>
          <p className='text'>
            The most exceptional features of the project are platform for the
            possibility of selling real estate by action and multifunctional and
            intuitive search with convenient filters.
          </p>
          <p className='text'>
            In addition to the web application, we also developed a mobile
            version with responsive design, which according to the ‘Appium’
            scores 89 points in the performance and optimization test.
          </p>
          <p className='text'>Interesting tech. features of the project:</p>
          <ul className='list-features text'>
            <li>
              To provide a uniform display of web pages in different web
              browsers we used Polyfill.
            </li>
            <li>
              As we needed the quickest solution for creating an item slider, we
              implemented Owl Carousel JQuery plugin.
            </li>
          </ul>
          <img className='project-img' src={Likimap1Image} alt='likimap 1' />
        </div>
      </section>
      <section className='section fixed center project-background-section divider-section'></section>
      <section className='section fixed center project-description-section'>
        <div className='section-body'>
          <img className='project-img' src={Likimap2Image} alt='likimap 2' />
        </div>
        <div className='section-footer'>
          <ul className='list list-card'>
            <li>
              <div className='card'>
                <div className='card-image'>
                  <img
                    src={Likimap3Image}
                    alt='likimap 3'
                    className='img-responsive'
                  />
                </div>
                <div className='card-content'>
                  <div className='card-header'></div>
                  <div className='card-body'>
                    <p className='text'>Convenient mobile app</p>
                  </div>
                  <div className='card-footer'></div>
                </div>
              </div>
            </li>
            <li>
              <div className='card'>
                <div className='card-image'>
                  <img
                    src={Likimap4Image}
                    alt='likimap 4'
                    className='img-responsive'
                  />
                </div>
                <div className='card-content'>
                  <div className='card-header'></div>
                  <div className='card-body'>
                    <p className='text'>Filtres</p>
                  </div>
                  <div className='card-footer'></div>
                </div>
              </div>
            </li>
            <li>
              <div className='card'>
                <div className='card-image'>
                  <img
                    src={Likimap5Image}
                    alt='likimap 5'
                    className='img-responsive'
                  />
                </div>
                <div className='card-content'>
                  <div className='card-body'>
                    <p className='text'>Property Profile</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='card'>
                <div className='card-image'>
                  <img
                    src={Likimap6Image}
                    alt='likimap 6'
                    className='img-responsive'
                  />
                </div>
                <div className='card-content'>
                  <div className='card-header'></div>
                  <div className='card-body'>
                    <p className='text'>Applications from individuals</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/portfolio/house-of-borel/'
            nextLink='/portfolio/fangio-shop/'
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
        likimap {
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

export default LikimapPage;

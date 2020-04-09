import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import BreweryLogoImage from '@images/whitefrontier-brewery/whitefrontier-brewery-logo.png';
import Brewery1Image from '@images/whitefrontier-brewery/whitefrontier-brewery-1-xl.jpg';
import Brewery2Image from '@images/whitefrontier-brewery/whitefrontier-brewery-2-xl.jpg';
import Brewery3Image from '@images/whitefrontier-brewery/whitefrontier-brewery-3-xl.jpg';
import Brewery4Image from '@images/whitefrontier-brewery/whitefrontier-brewery-4-xl.jpg';
import BreweryBottle1Image from '@images/whitefrontier-brewery/whitefrontier-brewery-bottle-1-xl.png';

import PaginationSimple from '../../components/pagination-simple';
import { SeoBlock } from '@ui/atoms';

const WhiteFrontierPage = ({ data }) => {
  const {
    whitefrontierBrewery: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='whitefrontier-brewery'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section fixed first project-background-section project-head-section'>
        <div className='project-head'>
          <div className='project-logo'>
            <img src={BreweryLogoImage} alt='whitefrontier brewery logo' />
          </div>
          <h1 className='title main-title project-title'>
            Whitefrontier <span className='text-stroke'>Brewery</span>
          </h1>
        </div>
      </section>
      <section className='section fixed center project-description-section'>
        <div className='section-body'>
          <div className='project-description'>
            <h2 className='title'>
              Traditional and respectable site of Czech brewery with integrated
              online beer
              <span className='text-stroke'> store</span>
            </h2>
            <div className='link-wrapper'>
              <a
                className='link'
                href='http://www.whitefrontier.ch/'
                rel='nofollow'
              >
                www.whitefrontier.ch/
              </a>
            </div>
            <p className='text'>
              Our client, Handcrafted Brewery Whitefrontier, turned us with a
              specific request - to organize the site in a way to combine the
              online store and the corporate site into one resource with a
              concise and mere design. The site turned out to be dynamic and
              fast, while being quite minimalistic and restrained. The style
              corresponds to the Whitefrontier conception - retro and good as
              its beer.
            </p>
            <p className='text'>
              Technical features of the project:
              <ul className='list-features'>
                <li>
                  Since we were trying to find a fast charting library to show
                  charts on mobile devices, performance was important for us.
                  That is why we opted <b>Chart.js</b>
                </li>
                <li>
                  <b>TweenMax</b> is the most feature-packed and popular
                  animation tool which was used to provide loading efficiency
                  and convenience.
                </li>
              </ul>
            </p>
          </div>
          <img
            className='project-img'
            src={Brewery1Image}
            alt='whitefrontier brewery 1'
          />
        </div>
        <div className='section-footer'></div>
      </section>
      <section className='section fixed center project-background-section divider-section'>
        <img src={BreweryBottle1Image} alt='whitefrontier brewery bottle 1' />
      </section>
      <section className='section fixed center project-description-section'>
        <div className='section-header'></div>
        <div className='section-body'>
          <img
            className='project-img lazyload'
            src={Brewery2Image}
            alt='whitefrontier brewery 2'
          />
          <ul className='list gallery'>
            <li className='gallery-item'>
              <img
                className='project-img'
                src={Brewery3Image}
                alt='whitefrontier brewery 3'
              />
            </li>
            <li className='gallery-item'>
              <img
                className='project-img'
                src={Brewery4Image}
                alt='whitefrontier brewery 4'
              />
            </li>
          </ul>
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/portfolio/fangio-shop/'
            nextLink='/portfolio/dawid-wadach/'
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
        whitefrontierBrewery {
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

export default WhiteFrontierPage;

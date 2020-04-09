import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';

import PaginationSimple from '../../components/pagination-simple';

import { ReactComponent as FangioShopLogoSvg } from '@images/fangio-shop/fangio-shop-logo.svg';
import FangioShop1Image from '@images/fangio-shop/fangioShop-1-xl.jpg';
import FangioShop2Image from '@images/fangio-shop/fangioShop-2-xl.jpg';
import FangioShop3Image from '@images/fangio-shop/fangioShop-3-xl.jpg';
import FangioShop4Image from '@images/fangio-shop/fangioShop-4-xl.jpg';
import FangioShop5Image from '@images/fangio-shop/fangioShop-5-xl.png';
import { SeoBlock } from '@ui/atoms';

const FangioShopPage = ({ data }) => {
  const {
    fangioShop: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout page='fangio-shop'>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section fixed first project-background-section project-head-section'>
        <div className='project-head'>
          <div className='project-logo'>
            <FangioShopLogoSvg />
          </div>
          <h1 className='title main-title project-title'>
            Fangio<span className='text-stroke'>Shop</span>
          </h1>
        </div>
      </section>
      <section className='section fixed center project-description-section'>
        <div className='section-header'></div>
        <div className='section-body'>
          <div className='project-description'>
            <h2 className='title'>
              Authoritative and prestigious site of brand
              <span className='text-stroke'> clothing</span>
            </h2>
            <div className='link-wrapper'>
              <a className='link' href='https://fangio.shop/' rel='nofollow'>
                fangio.shop/
              </a>
            </div>
            <p className='text'>
              Our client, the Swiss clothing brand Fangio-shop, expressed a
              precise and clear requirement: he wanted the web site to has
              laconical and sustained design and being informatively filled with
              content at the same time.
            </p>
            <p className='text'>
              Therefore, we decided to divide the main page into two parts - a
              section with the brand philosophy description and a section with a
              switch to the current Clothing Collection.
            </p>
            <p className='text'>
              As a result, the shop turned out to be minimalistic with the
              addition of vintage blending, looking like an attractive showcase
              with a Swiss quality mark.
            </p>
            <p className='text'>
              Technical features of the project:
              <ul className='list-features'>
                <li>
                  <b>
                    It is not difficult to explain why we gave a preference to
                    Shopify
                  </b>
                  &nbsp;It offers high level of security and reliability, which
                  is an absolute necessity for online store.
                </li>
              </ul>
            </p>
          </div>
          <img
            className='project-img'
            src={FangioShop1Image}
            alt='fangioShop 1'
          />
        </div>
        <div className='section-footer'></div>
      </section>
      <section className='section fixed center project-background-section divider-section'></section>
      <section className='section fixed center project-description-section'>
        <div className='section-header'></div>
        <div className='section-body'>
          <img
            className='project-img'
            src={FangioShop5Image}
            alt='fangioShop 5'
          />
          <ul className='list gallery'>
            <li className='gallery-item gallery-item-1'>
              <div className='card-wrapper'>
                <div className='card card-1'>
                  <div className='card-image'>
                    <img
                      src={FangioShop2Image}
                      className='img-responsive'
                      alt='fangioShop 2'
                    />
                  </div>
                  <div className='card-content'>
                    <div className='card-header'>
                      <h2 className='secondary-title'>LA GRIFFE FANGIO</h2>
                    </div>
                    <div className='card-body'>
                      <p className='text text-description'>
                        Same Same...but different, Classique revisité avec
                        patte de boutonnage ultra fine et col chemise.
                      </p>
                    </div>
                    <div className='card-footer'></div>
                  </div>
                </div>
              </div>
            </li>
            <li className='gallery-item gallery-item-2'>
              <div className='card-wrapper'>
                <div className='card card-2'>
                  <div className='card-image'>
                    <img
                      src={FangioShop3Image}
                      className='img-responsive'
                      alt='fangioShop 3'
                    />
                  </div>
                  <div className='card-content'>
                    <div className='card-header'>
                      <h2 className='secondary-title'>FABRIQUÉ EN FRANCE</h2>
                    </div>
                    <div className='card-body'>
                      <p className='text text-description'>
                        Teinture made in France, Confection made in France,
                        Tissage made in France, Broderie made in France,
                        Packaging made in France
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='gallery-item gallery-item-3'>
              <div className='card-wrapper'>
                <div className='card card-3'>
                  <div className='card-image'>
                    <img
                      src={FangioShop4Image}
                      className='img-responsive'
                      alt='fangioShop 4'
                    />
                  </div>
                  <div className='card-content'>
                    <div className='card-body'>
                      <p className='text text-description'>le Polo</p>
                    </div>
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
            prevLink='/portfolio/likimap/'
            nextLink='/portfolio/whitefrontier-brewery/'
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
        fangioShop {
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
export default FangioShopPage;

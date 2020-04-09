import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';
import Blog1Image from '@images/blog/website-design-affects/1.jpg';
import Blog2Image from '@images/blog/website-design-affects/2.jpg';
import Blog3Image from '@images/blog/website-design-affects/3.jpg';
import Blog4Image from '@images/blog/website-design-affects/4.jpg';
import Blog5Image from '@images/blog/website-design-affects/5.jpg';

import PaginationSimple from '@ui/pagination-simple';
import { Link } from 'gatsby';
import { SeoBlock } from '@ui/atoms';

const BlogItem = ({ data }) => {
  const {
    websiteDesignAffects: { description, title, link, author },
  } = data.site.siteMetadata;

  return (
    <Layout>
      <SeoBlock
        title={title}
        description={description}
        author={author}
        link={link}
      />
      <section className='section first padding-vertical blog-article-section'>
        <div className='section-body fixed'>
          <img
            src={Blog1Image}
            className='img-responsive'
            alt='Website design affects'
          />
          <h1>
            How the website design affects sales and why the redesign is
            necessary
          </h1>
          <span>20.01.19</span>
          <p>
            Most owners of commercial websites (portals, online stores,
            catalogs) often underestimate design as a significant part of the
            success of building a business.
          </p>
          <p>
            Large commercial sites located on the top lines of search engines,
            as well as eminent market leaders, carry out a complete redesign of
            their resources at least 1 time in 3 years! This approach allows
            them not only to hold positions but also to increase the volume and
            loyalty of the user audience every month.
          </p>
          <h2>How the website redesign can boost sales</h2>
          <p>
            A site is one of the links that form the complete business model of
            a company.
          </p>
          <p>
            A beautiful, convenient and intuitive website design helps not only
            increase conversion, but also form a whole group of users who will
            admire the new way, share their impressions with colleagues and
            friends.
          </p>
          <p>
            Professional redesign of the site, taking into account the
            characteristics of the business, allows you to get the following
            advantages:
          </p>
          <img
            src={Blog2Image}
            className='img-responsive'
            alt='Adaptive markup'
          />
          <h2>Adaptive markup - another argument in favor of updating</h2>
          <p>
            A huge number of websites created 7-10 years ago don’t have an
            adaptive layout. Time has changed and today the presence of adaptive
            layout is not just a bonus or a useful user thing, but a necessity.
          </p>
          <p>
            With the growing share of mobile traffic, a trend has ripened: all
            sites should have an adaptive layout, which allows them to be
            correctly viewed on any device.
          </p>
          <p>
            In 2018, Google specialists officially announced that sites without
            a mobile (adaptive) version will not receive an advantage in the
            ranking.
          </p>
          <p>
            The redesign of the resource necessarily implies the implementation
            of an adaptive layout.
          </p>
          <img
            src={Blog3Image}
            className='img-responsive'
            alt='Think about user'
          />
          <h2>Think about user, think like user</h2>
          <p>What problems does your website solve for the user?</p>
          <p>
            Based on a brainstorming session, engaging colleagues and
            acquaintances, independent individuals, business owners can
            formulate a whole series of their own wishes and elements that
            should be included in the updated design of the project.
          </p>
          <p>
            This approach can really be called: "Think about the user, think
            like a user". Just put yourself in the place of a person, try to go
            all the way (to purchase or order services).
          </p>
          <img
            src={Blog4Image}
            className='img-responsive'
            alt='Design requirements'
          />
          <h2>Key website design requirements</h2>
          <p>
            The completion or redesign of the site must include the mandatory
            requirements:
          </p>
          <ul>
            <li>
              <p>high download speed;</p>
            </li>
            <li>
              <p>optimal amount and combination of colors;</p>
            </li>
            <li>
              <p>full disclosure of information on landing pages;</p>
            </li>
            <li>
              <p>lack of complex and intuitive incomprehensible navigation.</p>
            </li>
          </ul>
          <p>
            Simple rules help to achieve high results when redesigning the site!
          </p>
          <img
            src={Blog5Image}
            className='img-responsive'
            alt='The site is out of date'
          />
          <h2>The site is out of date: how to understand it and what to do</h2>
          <p>
            Have you started to notice a decrease in conversion, the total
            number of users, a deterioration in behavioral factors and a
            subsequent decrease in positions in search engines?
          </p>
          <p>
            It is time to reanimate the site and the only redesign will help in
            this. We have come across dozens of sites in the stagnation phase.
            After introducing a new design, functional elements and other
            solutions that add value to the page, be sure that growth will not
            take long.
          </p>
          <p>
            The CrisperSoft team specializes in the development and
            implementation of design projects of any complexity and is ready to
            offer its help - <Link to='/contacts/'>write to us</Link>, we will
            discuss your project.
          </p>
          <p>Breathe new life into your website!</p>
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/blog/e-commerce-design/'
            nextLink='/blog/spa-pwa/'
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
        websiteDesignAffects {
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

export default BlogItem;

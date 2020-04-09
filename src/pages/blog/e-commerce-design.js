import React from 'react';
import { graphql } from 'gatsby' 
import { Layout } from '@ui/templates';
import Blog1Image from '@images/blog/e-commerce-design/1.jpg';
import Blog2Image from '@images/blog/e-commerce-design/2.jpg';
import Blog3Image from '@images/blog/e-commerce-design/3.jpg';

import PaginationSimple from '@ui/pagination-simple';
import { Link } from 'gatsby';
import { SeoBlock } from '@ui/atoms';

const BlogItem = ({ data }) => {
  const {
    eCommerceDesign: { description, title, link, author },
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
            alt='E-commerce design'
          />
          <h1>E-commerce design. Errors in UX</h1>
          <span>20.01.19</span>
          <p>
            UI / UX web design is a combination of solutions that are based on
            the behavioral factors of users and are designed to adapt an
            interaction with the site. Creating a convenient and harmonious
            interface involves the development of every detail, so novice
            designers often make mistakes in their work. Consider the most
            common examples of failed UX.
          </p>
          <h2>Website design repels</h2>
          <p>
            The first impression of a blog or online store is formed in the
            first few seconds after it is downloaded in a browser. Professional
            UX website design is a successful combination of the color scheme of
            the design, the location of navigation elements and information
            sections. When all the content on the site looks nice, then luring
            the user is much easier.The most serious design mistakes:
          </p>
          <ul>
            <li>
              <p>chaotic arrangement of elements;</p>
            </li>
            <li>
              <p>a large number of animations;</p>
            </li>
            <li>
              <p>pictures in low resolution;</p>
            </li>
            <li>
              <p>sloppy bright fonts;</p>
            </li>
            <li>
              <p>lack of navigation.</p>
            </li>
          </ul>
          <h2>The lack of a mobile version of the site</h2>
          <p>
            In 2019, sites without an adaptive layout or mobile version still
            exist. In this case, even with a version for smartphones, many
            developers do not take into account the UX-component. The behavior
            and purpose of the visit of a visitor using a smartphone may differ,
            therefore, it is necessary to take into account behavioral factors
            not only when creating a desktop version of a page. The owner of a
            mobile gadget also wants to get the information he is interested in
            as quickly as possible. The developer’s task is to make as much
            information as possible available in the mobile version and explain
            why some features are only possible on a PC.
          </p>
          <img
            src={Blog2Image}
            className='img-responsive'
            alt='Confusing navigation'
          />
          <h2>Bad, confusing navigation</h2>
          <p>
            Inconvenient navigation is a good reason to close the site and never
            return to it again. There is no need for endless page scrolling and
            a dozen clicks on obscure links if competitors have all the
            information available in 3 clicks through the navigation panel. The
            user must immediately understand where he will go when he clicks on
            a specific menu item. You should not increase traffic to unpopular
            pages and build inadequate linking.
          </p>
          <h2>
            Lack of basic information (payment, delivery, the return of goods){' '}
          </h2>
          <p>
            You will have to wait a long time to increase the conversion if the
            user cannot immediately order the product. Possible payment options,
            delivery periods and return procedures are what everyone who visits
            the site wants to know to make a purchase. If this information
            cannot be found, then the credibility of the seller drops sharply.
          </p>
          <h2>The shopping process is complicated</h2>
          <p>
            If the user has to spend too much time to complete the target
            action, then the likelihood that he will finish what he started is
            not high. Mandatory registration scares off as well as secret
            prices, which can be found out only after filling out the feedback
            form. Not everyone is ready for unnecessary communications, so the
            process of purchasing goods needs to be simplified as much as
            possible.
          </p>
          <h2>The shopping process is boring</h2>
          <p>
            Not always a conceptual model is ideal for the user. In some cases,
            market and target data lead to a too simple interface that
            competitors use. Do not be afraid to stand out, but the main thing
            is the care of the user.
          </p>
          <h2>
            Unreadable description of the product or placed in an uncomfortable
            place
          </h2>
          <p>
            Web solutions for e-commerce that do not give users the information
            they need to look strange. The description should not be placed at
            the very bottom of the page under the end-to-end blocks - most
            likely, no one will ever know the necessary information but simply
            refuse the purchase. Basics of text design: the use of headers,
            graphic elements, and lists. All this allows you to quickly find the
            information you need and not read the text completely. It is
            necessary to give the user a choice.
          </p>
          <h2>Obsessive involvement and unreasonable use of pop-ups</h2>
          <p>
            The times when pop-ups led to a rapid increase in sales are long
            gone. Now they are convenient for use as additional tools for
            collecting data or conducting surveys. Promptly advertise products
            using a pop-up window is the best strategy in order to cause the
            user to be rejected. At the same time, Google lowers the rating of
            sites that have banners covering the main content. Also, do not
            forget that from a smartphone such windows can be difficult or
            impossible to close - the percentage of failures from mobile devices
            will increase immediately after the introduction of pop-up banners.
          </p>
          <img
            src={Blog3Image}
            className='img-responsive'
            alt='Mistakes in e-commerce'
          />
          <h2>How to fix or prevent mistakes in e-commerce</h2>
          <p>
            Website development and creation are, first of all, user care. It is
            required to take into account the needs and specifics of the target
            audience when working on the design, so as not to lose customers in
            vain and constantly attract targeted traffic. The best is the enemy
            of the good, and every designer can make a mistake. We must not
            forget that user experience is more important than beautiful design.
            To fix the flaws, you need to understand exactly how the potential
            client interacts with the site, what he wants to find there and give
            him that.
          </p>
          <p>
            Our CrisperSoft team specializes in the design and is ready to offer
            our expert assistance in this matter -{' '}
            <Link to='/contacts/'>contact us</Link>. Create a project from
            scratch or fix errors.
          </p>
        </div>
      </section>
      <section className='section center pagination-section'>
        <div className='section-body fixed'>
          <PaginationSimple
            prevLink='/blog/cms/'
            nextLink='/blog/website-design-affects/'
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
        eCommerceDesign {
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
